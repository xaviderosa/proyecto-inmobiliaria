const express = require("express");
const router = express.Router();
const propietarioController = require("../controllers/propietariosController");

router.get("/", propietarioController.list);
router.post("/add", propietarioController.guardar);
router.get("/delete/:id", propietarioController.eliminar);

router.get("/update/:id", propietarioController.editar);
router.post("/update/:id", propietarioController.actualizar);

module.exports = router;