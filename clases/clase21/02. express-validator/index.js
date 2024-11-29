const express = require ("express")
const app = express()
const path = require("path");

const port = 3030 

const userRouter = require ("./routes/userRouter.js")

// configuracion del motor de vistas (plantillas dinamicas) y la carpeta donde estaràn los archivos de vista
app.use(express.json()) // analiza los request

app.set("views", path.join(__dirname,"views")) // definimos la carpeta views como ubicacion de las vistas
app.set ("view engine","ejs")// definimos EJS como el motor de vistas para reenderizar contenido dinamico


app.use("/users", userRouter)

app.listen (port,()=>{
    console.log(`Servidor Ok en el puerto ${port}`);
    
})