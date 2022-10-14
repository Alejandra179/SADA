const router = require("express").Router();
const cors = require("cors");
const {
  getValues,
  getLastValues,
  getWithDate,
  addValue,
} = require("./controller");
// asignamos las rutas

// get estaciones

router.get("/", getValues);

// get ultima medicion de la estacion

router.get("/:id", getLastValues);

// get todas las mediciones de un estacion en una fecha

router.get("/:id/:date", getWithDate);

//agregar medicion de sensores

// -------------------
router.post("/", cors(), addValue);

module.exports = router;
