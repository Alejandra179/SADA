const convertirFecha = (fecha) =>
  `${fecha.getFullYear()},${fecha.getMonth() + 1},${fecha.getDate()}`;

const convertFormatDMY = (fecha) =>
  `${fecha.substring(8, 10)}/${fecha.substring(6, 7)}/${fecha.substring(0, 4)}`;

function generarArray(objeto) {
  let fechas = [];
  let arrayFinal = [];
  let contador = 0;
  objeto.forEach((element, indice) => {
    if (!fechas.includes(element.fecha)) {
      arrayFinal.push(element);
      let date = element.fecha;
      fechas.push(date);
      let registrosFecha = arrayFinal[contador];
      for (let i = indice + 1; i < objeto.length; i++) {
        let valor_humedad = registrosFecha.humedad;
        let valor_temperatura = registrosFecha.temperatura;
        let valor_viento = registrosFecha.viento.velocidad;
        if (date === objeto[indice].fecha) {
          valor_viento < objeto[i].viento
            ? (registrosFecha.velocidad_min = valor_viento) &&
              (registrosFecha.velocidad_max = objeto[i].viento.velocidad)
            : (registrosFecha.velocidad_max = valor_viento) &&
              (registrosFecha.velocidad_min = objeto[i].viento.velocidad);

          valor_temperatura < objeto[i].temperatura
            ? (registrosFecha.temperatura_min = valor_temperatura) &&
              (registrosFecha.temperatura_max = objeto[i].temperatura)
            : (registrosFecha.temperatura_max = valor_temperatura) &&
              (registrosFecha.temperatura_min = objeto[i].temperatura);

          valor_humedad < objeto[i].humedad
            ? (registrosFecha.humedad = objeto[i].humedad)
            : (registrosFecha.humedad = valor_humedad);
        }
      }
      contador += 1;
    }
  });
  console.log(arrayFinal);
  return arrayFinal;
}

export { convertirFecha, convertFormatDMY, generarArray };
