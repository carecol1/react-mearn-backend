/*Event Routes
/api/events*/
//Todas tienen que pasar por la validacion del JWT
const { Router } = require("express");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();

router.use(validarJWT);

const {
  crearEvento,
  getEventos,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

//obtener eventos
router.get(
  "/",
  [check("title", "El titulo es obligatorio").not().isEmpty(), validarCampos],
  [
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    validarCampos,
  ],
  [check("end", "La fecha final es obligatoria").custom(isDate), validarCampos],

  getEventos
);

//crear un nuevo evento
router.post("/", crearEvento);

//actualizar un nuevo evento
router.put("/:id", actualizarEvento);

//Borrar evento
router.delete("/:id", eliminarEvento);
module.exports = router;
