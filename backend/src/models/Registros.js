const { Schema, model } = require("mongoose");

const registroSchema = new Schema({
  fecha: {
    type: Object,
  },
  hora: {
    type: String,
  },
  humedad: {
    type: String,
  },
  precipitacion: {
    type: String,
  },
  temperatura: {
    type: String,
  },
  viento: {
    velocidad: String,
    direccion: String,
  },
});

module.exports = model("Registro", registroSchema);
