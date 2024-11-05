const express = require ("express")

// controladores 
const {traerPosteos,traerPost,crearPosteo} = require ("../controllers/postControllers.js")

/* configurar las rutas express  */// metodos HTTP

const router = express.Router()

router.get ("/",traerPosteos)
router.get ("/:id",traerPost)
router.post ("/",crearPosteo)
/* router.put ("/:id",funcion que actualiza un posteo en la base de datos)
router.delete ("/:id",funcion que elimina un posteo en la base de datos) */







module.exports = router