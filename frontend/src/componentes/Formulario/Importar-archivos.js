import React, { useState, createRef, useContext, useEffect } from "react";
import { useLocation } from "wouter";
import UserContext from "../../hooks/useContext";
import useUser from '../../hooks/useUser' 
import serviceInsert from "../../services/insertarRegistros";
const ImportarArchivos = () => {
  const { jwt } = useContext(UserContext);
  const { isLogged} = useUser();
  const [, navigate] = useLocation();
  const [temperaturas, setTemperaturas] = useState("");
  const [humedades, setHumedades] = useState("");
  const [fechas, setFechas] = useState("");
  const [horas, setHoras] = useState("");
  const [viento, setViento] = useState({
    velocidad: "",
    direccion: "",
  });

  const [precipitaciones, setPrecipitaciones] = useState("");
  const fileInput = createRef();

  useEffect(()=>{
    (isLogged)?
      (navigate('/importar-archivos')):
      navigate('/login')
      
}, [isLogged,navigate])
  const handleInputChange = async () => {
    let archivo = await fileInput.current.files[0];
    if (!archivo) {
      return;
    }
    const lector = new FileReader();
    lector.onload = async (e) => {
      let contenidoArchivo = e.target.result;

      const fechas = [];
      const horas = [];
      const temperaturas = [];
      const humedades = [];
      const datosViento = { velocidad: [], direccion: [] };
      const precipitaciones = [];

      let i;
      var result = "";
      var c;
      for (i = 0; i < contenidoArchivo.length; i++) {
        c = contenidoArchivo.substring(i, i + 1);
        switch (c) {
          case "\n":
            result = result + "</br>";

            break;
          case "\t":
            result = result + "</br>";

            break;
          case "\r":
            result = result + "</br>";

            break;
          default:
            result = result + c;
            break;
        }
      }

      let cadena = result,
        separador = "</br>",
        limite = cadena.length - 1,
        arregloDeSubCadenas = cadena.split(separador, limite);
      let j = 0;
      console.log(arregloDeSubCadenas);
      while (j < arregloDeSubCadenas.length) {
        let fecha = arregloDeSubCadenas[j];
        fechas.push(fecha);
        let hora = arregloDeSubCadenas[j + 1];
        horas.push(hora);
        let temperatura = arregloDeSubCadenas[j + 2];
        temperaturas.push(parseFloat(temperatura));
        let humedad = arregloDeSubCadenas[j + 3];
        humedades.push(parseFloat(humedad));
        let direccion = arregloDeSubCadenas[j + 4];
        datosViento.direccion.push(parseInt(direccion));
        let velocidad = arregloDeSubCadenas[j + 5];
        datosViento.velocidad.push(parseFloat(velocidad));
        let precipitacion = arregloDeSubCadenas[j + 6];
        precipitaciones.push(precipitacion);
        j = j + 8;
      }

      setTemperaturas(temperaturas);
      setHumedades(humedades);
      setFechas(fechas);
      setHoras(horas);
      setViento({
        velocidad: datosViento.velocidad,
        direccion: datosViento.direccion,
      });
      setPrecipitaciones(precipitaciones);
    };
    lector.readAsText(archivo);
  };
  const enviarDatos = async (e) => {
    e.preventDefault();
    await serviceInsert({
      jwt,
      temperaturas,
      humedades,
      fechas,
      horas,
      precipitaciones,
      viento,
    });
    document.location.href = "http://localhost:3000/pagina-principal";
  };
  return (
    <div className="container">
      <div className="d-flex">
        <div className="row justify-content-center card border-secondary mt-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={enviarDatos}>
                <div className="mb-3">
                  <label>
                    <strong>Importe su archivo aquí</strong>
                  </label>
                  <input
                    type="file"
                    onChange={handleInputChange}
                    ref={fileInput}
                    className="form-control-sm"
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportarArchivos;
