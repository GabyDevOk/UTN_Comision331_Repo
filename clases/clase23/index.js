require("dotenv").config(); // cargamos variables de entorno desde .env

const express = require ("express")
const path = require ("path") // Manejo de rutas del proyecto
const cors = require ("cors") // permitir solicitudes de diferentes dominios
const session = require ("express-session") // manejo de sesiones

const sequelize = require ("./data/db.js") // configuracion de la base de datos
const authRoutes = require ("./routes/authRoutes.js") // ruta de autenticacion (users)
const postRoutes = require ("./routes/postRoutes.js") // rutas de posts

const app = express ()

// configuracion del motor de vistas (plantillas dinamicas) y la carpeta donde estaràn los archivos de vista

app.set("views", path.join(__dirname,"views")) // definimos la carpeta views como ubicacion de las vistas
app.set ("view engine","ejs")// definimos EJS como el motor de vistas para reenderizar contenido dinamico

// Middlewares Basicos
app.use (express.json()) // analiza los request / data de http lo pasamos a un objeto
app.use (cors())
app.use(express.urlencoded({extended:true}))  //data de html lo pasamos a un objeto

// configuracion de sesiones
app.use(
    session ({
        secret:process.env.SESSION_KEY, // cambiar esto por una clave segura
        resave:false,
        saveUninitialized:false,
    })
)

// Rutas principales

app.use("/auth",authRoutes) // Manejo de usuario (login,registro)
app.use("/posts", postRoutes) /// Manejo de posteos

// conectar la base de datos 

sequelize.sync({ alter: true })
  .then(() => console.log('Base de datos sincronizada correctamente'))
  .catch((err) => console.error('Error al conectar a la base de datos:', err));


//levantar el servidor
const PORT = process.env.PORT||3000;
app.listen (PORT, ()=>{
    console.log(`servidor corriendo en el puserto ${PORT}`);
    
})
