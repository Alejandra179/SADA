const { Router } = require("express");
const router = Router();
const {
  getEndRegistros,
  newRegistro,
  getRegistrosFecha,
} = require("../controllers/registros.controllers");
const { signIn } = require("../controllers/user.controlles");
const { verifyToken } = require("../middlewares/authJwt");

router.route("/endRegistros/:fecha").get(getEndRegistros);
router.route("/importar-registros").post(verifyToken, newRegistro);
router.route("/:fechaInicio&:fechaFin").get(getRegistrosFecha);
router.route("/login").post(signIn);

module.exports = router;
