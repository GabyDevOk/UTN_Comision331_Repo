// importamos express para manejar solicitudes
const express = require ("express")
/* creamos un nuevo enrutador (router) para manejar las rutas de este modulo */
const router = express.Router()
/* importar el controlador correspondiente, en este caso extraemos la funcion index, desde el archivo mainController.js, que está ubicada en la carpeta "controllers */
const {index,show} = require ("../controllers/marcasControllers.js")

/* definimos la ruta GET para el entutador
cuando una persona accede a la raiz del sitio "/" se ejecuta la funcion "index"
esta funcion se encue ntra en el controlador y contiene la logica para manejar la solicitud */
router.get("/", index) 
router.get("/:marca",show)
/* exportar el enrutador para que pueda ser utilizado en otros modulos
esto permite que las rutas que definimos aca sean accesibles desde index.js (entry point) */
module.exports = router