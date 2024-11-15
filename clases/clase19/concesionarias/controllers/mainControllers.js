/* requerimos fs para leer y escribir archivos en el sistema de archivos */
const fs = require ("fs")

/* aca lo utilizaremos para leer un archivo JSON que contiene informacion de  concesionarias */

/* lectura del archivo JSON
leemos el archivo consecionarias.json de forma síncrona */
/* JSON.parse = convierte el contenido del archivo JSON en un objeto de JS para manipularlo mas facilmente en el codigo */
const concesionariasJSON = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))

module.exports = {
    index: (req,res)=>{
      res.render("main",{
        title: "Concesionarias",
        nombre : "UTN Autos",
        concesionaria : concesionariasJSON
      })
    }
}

/* module.exports : se exporta un objeto con las funciones del controlador , puede ser usado en un enrutador para definir rutas 

definimos una funcion ("index") que maneja las solicitudes para la pagina principal

res.render ("main",{...})
utilizamos el motor de vistas EJS para generar una pagina HTML dinamica
se pasa un objeto con variables que estaran disponibles en la vista
*/
