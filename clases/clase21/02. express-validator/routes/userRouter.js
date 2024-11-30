const express = require ("express")
const {validatorRegister} = require ("../middlewares/validatorConfig.js")
const {showForm,validatorForm} = require ("../controllers/usersController.js")
const router = express.Router()
// Ruta para renderizar el formulario
router.get ("/register", showForm)
// Ruta para procesar el registro con validaciones
router.post ("/register",validatorRegister,validatorForm)

module.exports =router


