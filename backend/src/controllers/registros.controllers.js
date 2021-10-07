const registrosCtrl = {};
const Registro = require("../models/Registros");
const { stringToDate } = require("../utils/functions");

registrosCtrl.getRegistro = async (req, res) => {
  // let registro = await Registro.limit(1).sort({fecha:-1})
  let registro = await Registro.limit(1).sort({
    $and: [{ fecha: -1 }, { hora: -1 }],
  });
  return res.json(registro);
};

registrosCtrl.getRegistrosFecha = async (req, res) => {
  let fechaStart = new Date(req.params.fechaInicio);
  let fechaEnd = new Date(req.params.fechaFin);
  let registros = await Registro.find({
    fecha: { $gte: fechaStart, $lte: fechaEnd },
  });
  console.log(registros)
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
