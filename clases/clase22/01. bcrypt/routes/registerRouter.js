const express = require ("express")
const router = express.Router()
const { formRegister,encryptPass, comparePass} = require ("../controllers/registerController.js")

// Ruta para renderizar el formulario
router.get ("/", formRegister)
// Ruta para encriptar la contraseña
router.post ("/encrypt",encryptPass)
// Ruta para comparar la contraseña
router.post ("/compare",comparePass)
module.exports= router