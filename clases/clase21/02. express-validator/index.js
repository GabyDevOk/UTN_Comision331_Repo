const express = require ("express")
const app = express()
const path = require("path");
const port = 3030 

/* const bodyparser = require('body-parser') */
// Body-parser middleware
/* app.use(bodyparser.urlencoded({ extended: false })) */ //data de html lo pasamos a un objeto
/* app.use(bodyparser.json())  */ // parsea data enviado en formato JSON del req.body 
 // analiza los request

 app.use(express.urlencoded({ extended: false }))
/*  app.use (express.json()) */

const userRouter = require ("./routes/userRouter.js")

// configuracion del motor de vistas (plantillas dinamicas) y la carpeta donde estaràn los archivos de vista
app.set("views", path.join(__dirname,"views")) // definimos la carpeta views como ubicacion de las vistas
app.set ("view engine","ejs")// definimos EJS como el motor de vistas para reenderizar contenido dinamico


app.use("/users", userRouter)

app.listen (port,()=>{
    console.log(`Servidor Ok en el puerto ${port}`);
    
})