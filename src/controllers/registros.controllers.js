const registrosCtrl = {};
const Registros = require("../models/Registros");
const Registro = require("../models/Registros");
const { stringToDate, rangoDeFechas } = require("../utils/functions");

registrosCtrl.getEndRegistros = async (req, res) => {
  let { rangoMes, rangoAnio, rangoDia, hora } = rangoDeFechas();
  let fechaFind = new Date(req.params.fecha);
  let resUltimosRegistros = await Registro.find({
    fecha: { $gte: rangoDia, $lte: fechaFind },
  }).sort({ fecha: -1, hora: 1 });

  //se extrae el registro que se encuentra en la posicion .length-1 para usarlo
  // como de la ultima hora
  let precipitacionDiaria = 0;
  resUltimosRegistros.length !== 0
    ? resUltimosRegistros((element) => {
        precipitacionDiaria += Number(element.precipitacion);
      })
    : "";
    
  let resPrecipitacionMensual = await Registros.aggregate([
    {
      $match: {
        fecha: { $gte: new Date(rangoMes), $lte: new Date(fechaFind) },
      },
    },
    { $group: { _id: "$fecha", maximoDiario: { $max: "$precipitacion" } } },
  ]);
  let precipitacionMen = 0;
  resPrecipitacionMensual.forEach((element) => {
    precipitacionMen += Number(element.maximoDiario);
  });

  let resPrecipitacionAnual = await Registros.aggregate([
    {
      $match: {
        fecha: { $gte: new Date(rangoAnio), $lte: new Date(fechaFind) },
      },
    },
    { $group: { _id: "$fecha", maximoDiario: { $max: "$precipitacion" } } },
  ]);
  let precipitacionAnual = 0;
  resPrecipitacionAnual.forEach((element) => {
    precipitacionAnual += Number(element.maximoDiario);
  });
  res !== ""
    ? res.json({
        resUltimosRegistros,
        precipitacionDiaria,
        precipitacionMen,
        precipitacionAnual,
      })
    : res.json({
        resUltimosRegistros: [],
        precipitacionDiaria: "0",
        precipitacionMen: "0",
        precipitacionAnual: "0",
      });
};

registrosCtrl.getRegistrosFecha = async (req, res) => {
  let fechaStart = new Date(req.params.fechaInicio);
  let fechaEnd = new Date(req.params.fechaFin);
  let registros = await Registro.find({
    fecha: { $gte: fechaStart, $lte: fechaEnd },
  });

  return await res.json(registros);
};

registrosCtrl.newRegistro = async (req, res) => {
  const { temperaturas, humedades, fechas, horas, precipitaciones, viento } =
    req.body;
  i = 0;
  while (i < temperaturas.length) {
    let newFecha = stringToDate(fechas[i]);
    let velocidad_viento = viento.velocidad[i];
    let direccion_viento = viento.direccion[i];
    const newRegistro = new Registro({
      temperatura: temperaturas[i],
      humedad: humedades[i],
      fecha: newFecha,
      hora: horas[i],
      viento: {
        velocidad: velocidad_viento,
        direccion: direccion_viento,
      },
      precipitacion: precipitaciones[i],
    });
    await newRegistro.save();
    i = i + 1;
  }
  res.json({ message: "registros guardados" });
};

module.exports = registrosCtrl;
