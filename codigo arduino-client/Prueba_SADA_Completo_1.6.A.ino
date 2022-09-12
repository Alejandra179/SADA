/*Conexión en el loop. No se desconecta por su cuenta. Si se detecta que se
desconectó por algún motivo, intentará la reconexión*/
//##############################Librerías##############################//


#include <DHT.h>
#include <HTTPClient.h>


//##########Variables y objetos relacionados con las librerías##########//


#define DHTTYPE DHT22 //Definir el modelo de DHT
#define DHTPIN  4     //Definir el pin de datos, D4 del ESP32

DHT dht(DHTPIN, DHTTYPE, 22); //Crear objeto dht

String url = "https://db-remaf.herokuapp.com/api/"; //URL del servidor


//##############################Variables##############################//


//Variables del anemómetro
const int anemometro = 18;

//Variables para función de contar ranuras
volatile int  ranuras = 0;
const int     umbral = 100;
long          tiempo_medicion_ranuras = 0;
float         vueltas_total = 0, vel_km_h = 0;

//Variables para medir la dirección del viento
int       direccion = 0, direccion1 = 0, direccion2 = 0, direccion3 = 0;
const int veleta1 = 16;
const int veleta2 = 17;
const int veleta3 = 5;
String    direccion_final;

//Variables para medir la temperatura y humedad
float humedad = 0, temperatura = 0;

//Variables para medir la precipitación
//Considerando el funcionamiento del pluviómetro se plantea tomar un recipiente con las mismas medidas del receptor de agua del pluviómetro y cargarlo con distintas alturas de agua.
//Verter esas alturas distintas y realizar el conteo de los pulsos recibidos enviados por el pluviómetro en cada caso para poder definir de cuanto es la precisión de cada pulso.
//Para medir, se multiplica un contador de pulsos por la precisión del pluviómetro. Este contador debe reiniciarse a las 00:00 hs de cada día
//const float prec_pluv = (insertar precisión del pluviómetro);*/
int   pulsos_pluv = 0;
int   pluviometro = 19;
float precipitacion = 0;

//Credenciales de la red wifi (Primera red: del polo; Segunda red: datos de Facundo)
const char* ssid = "AULA_POLO";
const char* password = "refsatel.2019";
//const char* ssid = "Alcatel 3H";
//const char* password = "zero1234";

//Variables para controlar el tiempo
unsigned long tiempo_anterior = 0, tiempo_envio = 0;

//Matriz de almacenamiento de mediciones por corte de conexión a Internet
String  mediciones[720][7];
int     intentos_conexion = 0, index_medicion = 0;
String  fecha = "04/08/2022";
String  hora = "10:30";


//##############################Interrupción##############################//


//Interrupción para contar las ranuras cada vez que hay una señal en el encoder
void IRAM_ATTR inter_anemometro() {
  if(millis() - tiempo_medicion_ranuras > umbral) {
      ranuras++;
      Serial.println(ranuras);
      tiempo_medicion_ranuras = millis();
  }
}

//Interrupción para contar los pulsos cada vez que hay una señal en el pluviometro
void IRAM_ATTR inter_pluviometro() {
  if(millis() - tiempo_medicion_ranuras > umbral) {
      pulsos_pluv++;
  }
}


//##############################Setup##############################//


void setup() {
  //Iniciar puerto serie
  Serial.begin(115200);
  Serial.println("Pasando por setup");
  
  //Iniciar anemómetro
  attachInterrupt(digitalPinToInterrupt(anemometro), inter_anemometro, RISING);
  pinMode(anemometro, INPUT);

  //Iniciar veleta
  pinMode(veleta1, INPUT);
  pinMode(veleta2, INPUT);
  pinMode(veleta3, INPUT);

  //Iniciar DHT
  dht.begin();

  //Iniciar pluviómetro
  attachInterrupt(digitalPinToInterrupt(pluviometro), inter_pluviometro, RISING);
  pinMode(pluviometro, INPUT);

  //Tomar tiempo actual
  tiempo_anterior = millis();

  //Leds de visualización
  pinMode(27, OUTPUT);
  digitalWrite(27, LOW);
  pinMode(2, OUTPUT);
  digitalWrite(2, HIGH);
  delay(1000);
  digitalWrite(2, LOW);
}


//##############################Loop##############################//


void loop() {
  // put your main code here, to run repeatedly:
  iniciarMediciones();
}


//##############################Funciones##############################//

void almacenar_datos() {
  mediciones[index_medicion][0] = fecha;
  mediciones[index_medicion][1] = hora;
  mediciones[index_medicion][2] = String(direccion_final);
  mediciones[index_medicion][3] = String(vel_km_h);
  mediciones[index_medicion][4] = String(humedad);
  mediciones[index_medicion][5] = String(temperatura);
  mediciones[index_medicion][6] = String(precipitacion);
  Serial.print("Index: ");
  Serial.println(index_medicion);
  Serial.println("Mediciones:");
  Serial.print(fecha);
  Serial.print(", ");
  Serial.print(hora);
  Serial.print(", ");
  Serial.print(direccion_final);
  Serial.print(", ");
  Serial.print(vel_km_h);
  Serial.print(", ");
  Serial.print(humedad);
  Serial.print(", ");
  Serial.print(temperatura);
  Serial.print(", ");
  Serial.println(precipitacion);
}


/*Función que inicia la llamada consecutiva de las demás funciones para
realizar las mediciones de los sensores y el envío posterior al servidor*/
void iniciarMediciones() {
  if(millis() - tiempo_anterior >= 10000)
  {
    detachInterrupt(digitalPinToInterrupt(anemometro));
    calcular_velocidad_viento();
  }
}


//Medición del anemómetro
void calcular_velocidad_viento() {
  Serial.println("Calculo de velocidad en proceso");
  vueltas_total = ranuras;
  vueltas_total = vueltas_total / 20;
  //El cálculo se realiza considerando un radio de 10 cm
  vel_km_h = vueltas_total * 0.6283 * 10 * 0.036;
  mediciones[index_medicion][3] = String(vel_km_h);
  ranuras = 0;

  //Para muestreo:
  Serial.print("Dio un total de ");
  Serial.print(vueltas_total);
  Serial.println(" vueltas");
  Serial.print("Velocidad: ");
  Serial.println(vel_km_h);
  
  direccion_del_viento();
}


//Medición de la veleta
void direccion_del_viento() {
  if(digitalRead(veleta1) == 0) direccion1 = 0; else direccion1 = 1;
  if(digitalRead(veleta2) == 0) direccion2 = 0; else direccion2 = 2;
  if(digitalRead(veleta3) == 0) direccion3 = 0; else direccion3 = 4;
  direccion = direccion1 + direccion2 + direccion3;
  switch(direccion) {
    case 0:
      Serial.println("Caso 0");
      Serial.println("N");
      direccion_final = "Norte";
    break;
    case 1:
      Serial.println("Caso 1");
      Serial.println("NO");
      direccion_final = "Noroeste";
    break;
    case 2:
      Serial.println("Caso 2");
      Serial.println("O");
      direccion_final = "Oeste";
    break;
    case 3:
      Serial.println("Caso 3");
      Serial.println("SO");
      direccion_final = "Suroeste";
    break;
    case 4:
      Serial.println("Caso 4");
      Serial.println("S");
      direccion_final = "Sur";
    break;
    case 5:
      Serial.println("Caso 5");
      Serial.println("SE");
      direccion_final = "Sudeste";
    break;
    case 6:
      Serial.println("Caso 6");
      Serial.println("E");
      direccion_final = "Este";
    break;
    case 7:
      Serial.println("Caso 7");
      Serial.println("NE");
      direccion_final = "Nordeste";
    break;
    default:
      Serial.println("No hay medida");
    break;
  }

  mediciones[index_medicion][2] = String(direccion_final);
  medicion_DHT();
}

//Medición del DHT
void medicion_DHT() {
  humedad = dht.readHumidity();         //Leer y almacenar la humedad
  temperatura = dht.readTemperature();  //Leer y almacenar la temperatura

  //Para muestreo:
  Serial.print("Humedad: ");
  Serial.println(humedad);
  mediciones[index_medicion][4] = String(humedad);
  
  Serial.print("Temperatura: ");
  Serial.println(temperatura);
  mediciones[index_medicion][5] = String(temperatura);  

  medir_precipitacion();
}

//Meidición del pluviómetro
void medir_precipitacion() {
  //precipitacion = pulsos_pluv * prec_pluv;

  ////////////////////////////////////

  //Para muestreo:
  Serial.print("Precipitación del día: ");
  Serial.print(precipitacion);
  Serial.println(" mm");

  mediciones[index_medicion][6] = String(precipitacion);
  enviar_datos();
}

//Enviar los datos medidos al servidor
void enviar_datos() {
  //Intento de conexión a internet
  intentos_conexion = 0;

  mediciones[index_medicion][0] = fecha;
  mediciones[index_medicion][1] = hora;
 
  if(WiFi.status() == WL_CONNECTED) {
    Serial.println("Conexion OK");
    Serial.print("IP Local: ");
    Serial.println(WiFi.localIP());
    digitalWrite(27, HIGH);
    HTTPClient http;
    for(int i = 0; i <= index_medicion;) {
      String jsonData = "{\"dir\":\"";
      jsonData += mediciones[i][2]; 
      jsonData += "\",\"vel\":\"";
      jsonData += mediciones[i][3];
      jsonData += "\",\"hume\":\"";
      jsonData += mediciones[i][4];
      jsonData += "\",\"temp\":\"";
      jsonData += mediciones[i][5];
      jsonData += "\",\"prec\":\"";
      jsonData += mediciones[i][6];
      jsonData += "\",\"estacion\":\"";
      jsonData += "1\"";
      jsonData += "}";
      Serial.print(jsonData);
      http.begin(url);
      http.addHeader("Content-Type","application/json");
      int codigo_respuesta = http.POST(jsonData);

      if(codigo_respuesta > 0) {
        Serial.println("Codigo HTTP: " + String(codigo_respuesta));
        if(codigo_respuesta == 200) {
          String cuerpo_respuesta = http.getString();
          Serial.println("El servidor respondio: ");
          Serial.println(cuerpo_respuesta);
          Serial.print("TAMAÑO DE STRING: ");
          Serial.println(cuerpo_respuesta.length());
          if(cuerpo_respuesta.length() == 39) {
            i++;
            digitalWrite(2,HIGH);
            delay(1000);
            digitalWrite(2,LOW);
          }
        } else {
          Serial.print("Error enviado POST, codigo: ");
          Serial.println(codigo_respuesta);
        }
        http.end();
      }
      delay(500);
    }
    index_medicion = 0;
  } else {
    WiFi.begin(ssid,password);
    for(intentos_conexion = 0; intentos_conexion <= 10; intentos_conexion++){
      if(WiFi.status() == WL_CONNECTED) {
        Serial.println("Conexion OK");
        Serial.print("IP Local: ");
        Serial.println(WiFi.localIP());
        digitalWrite(27, HIGH);
        HTTPClient http;
        for(int i = 0; i <= index_medicion;) {
          String jsonData = "{\"dir\":\"";
          jsonData += mediciones[i][2]; 
          jsonData += "\",\"vel\":\"";
          jsonData += mediciones[i][3];
          jsonData += "\",\"hume\":\"";
          jsonData += mediciones[i][4];
          jsonData += "\",\"temp\":\"";
          jsonData += mediciones[i][5];
          jsonData += "\",\"prec\":\"";
          jsonData += mediciones[i][6];
          jsonData += "\",\"estacion\":\"";
          jsonData += "1\"";
          jsonData += "}";
          Serial.print(jsonData);
          http.begin(url);
          http.addHeader("Content-Type","application/json");
          int codigo_respuesta = http.POST(jsonData);

          if(codigo_respuesta > 0) {
            Serial.println("Codigo HTTP: " + String(codigo_respuesta));
            if(codigo_respuesta == 200) {
              String cuerpo_respuesta = http.getString();
              Serial.println("El servidor respondio: ");
              Serial.println(cuerpo_respuesta);
              Serial.print("TAMAÑO DE STRING: ");
              Serial.println(cuerpo_respuesta.length());
              if(cuerpo_respuesta.length() == 39) {
                i++;
                digitalWrite(2,HIGH);
                delay(1000);
                digitalWrite(2,LOW);
              }
            } else {
              Serial.print("Error enviado POST, codigo: ");
              Serial.println(codigo_respuesta);
            }
            http.end();
          }
          delay(500);
        }
        index_medicion = 0;
        break;
      } else {
        if(intentos_conexion == 10) {
          Serial.println("Error en la conexion Wifi");
          almacenar_datos();
          index_medicion += 1;
          break;
        } else {
          Serial.print(".");
          delay(500);
        }
      }
    }
  }  
  attachInterrupt(digitalPinToInterrupt(anemometro), inter_anemometro, RISING);
  tiempo_anterior = millis();
}
