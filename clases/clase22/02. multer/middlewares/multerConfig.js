const multer = require("multer")
const path = require("path")

// configuramos donde y como se guardaran los archivos

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //destination: funcion que define donde se guardan los archivos cargados
        //file : contiene informacion sobre el archivo que se está cargando
        //cb : Callback que se usa para indicar el destino
        cb(null, path.join(__dirname, "../uploads")) //carpeta uploads
    },
    filename: function (req, file, cb) {
        //fieldname : funcion que define el nombre con el que se guarda el archivo
        //date.now(): genera una marca de tiempo unica para evitar colisiones de nombres
        cb(null, file.fieldname + '-' + Date.now()) /* Ejemplo : perfil.jpg-200512022024 */
    }
})


// filtrado solo archivos de imagen

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        /*    MIME tipo de archivo = image/jpeg , image/png etc */
        cb(null, true) // aceptamos imagenes
    } else {
        cb(new Error("Archivo no valido, solo permitimos Imagenes"))
    }
}

module.exports = multer({ storage, fileFilter })

// creamos y exportamos una instancia configruada de multer
/*   storage = donde y como se guardan los archivos
  fileFilter = controla que tipos de archivos permitimos */










