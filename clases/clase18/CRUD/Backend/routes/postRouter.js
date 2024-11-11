const express = require ("express")

// controladores 
const {traerPosteos,traerPost,crearPosteo,actualizarPosteo,borrarPosteo} = require ("../controllers/postControllers.js")

/* configurar las rutas express  */// metodos HTTP

const router = express.Router()

router.get ("/",traerPosteos)
router.get ("/:id",traerPost)
router.post ("/",crearPosteo)
router.put ("/:id",actualizarPosteo)
router.delete("/:id",borrarPosteo) 







module.exports = router