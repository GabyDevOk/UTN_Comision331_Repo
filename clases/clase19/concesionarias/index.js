// importar express para manejar las solicitudes y respuestas del servidor
const express = require ("express")
/* importar el modulo Nativo path, para trabajar con rutas de archivos y directorios de manera compatible
con diferentes sistemas operativos */
const path = require ("path")

// Definimos el puerto en el que escuchara nuestro servidor
const port = 3000

//creamos una instancia de express para nuestra aplicacion
const app = express()

//importar las rutas de los diferentes modulos para modularizar nuestra aplicacion
const mainRouter = require ("./routes/mainRoutes.js") // Rutas Principales como la pagina de inicio
/* sucursalesRouter
marcasRouter
autosRuter */

// configuracion del motor de vistas (plantillas dinamicas) y la carpeta donde estaràn los archivos de vista

app.set("views", path.join(__dirname,"views")) // definimos la carpeta views como ubicacion de las vistas
app.set ("view engine","ejs")// definimos EJS como el motor de vistas para reenderizar contenido dinamico

// Middleware para servir archivos estaticos (css,js,imagenes,etc) desde la carpeta public
app.use (express.static(path.join(__dirname,"public")))

// Definimos las rutas para diferentes funcionalidades de la aplicacion

app.use ("/",mainRouter); // rutas principales asociados a la raiz

/* 
/sucursales
/marcas
/autos */

/* iniciamos el servidor en el puerto que definimos (port) y mostramos un mensaje de confirmacion en la consola */

app.listen (port , ()=>{
console.log(`Servidor de concesionarias OK, en el puerto ${port}`);

});