// importamos express para manejar solicitudes
const express = require ("express")
/* creamos un nuevo enrutador (router) para manejar las rutas de este modulo */
const router = express.Router()

// controladores
const {index,show} = require ("../controllers/sucursalesControllers.js")


router.get ("/",index)
router.get ("/:sucursal",show) 




/* exportar el enrutador para que pueda ser utilizado en otros modulos
esto permite que las rutas que definimos aca sean accesibles desde index.js (entry point) */
module.exports = router