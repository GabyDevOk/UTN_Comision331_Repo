const express = require ("express")
const app = express()
const cors = require ("cors")
const postRouter  = require ("./routes/postRouter.js")
const db = require ("./data/db.js")

app.use(cors()) // habilitar el intercambio de informacion de origen cruzado
app.use(express.json()) // analiza los request

const port = 3030


/* ejemplo sin modularizar 
        rutas, controladores*/
app.get ("/",(req,res)=>{
    res.send ("Pagina Principal")
})

app.use ("/posteos",postRouter) // modularizado

// conexion a la base de datos
const conexionDB = async ()=>{
    try {
        await db.authenticate()
        console.log("conexion ok a la base de datos");
        
    } catch (error) {
        console.log(`hay un error y es el siguiente ${error}`);
        
    }
}


app.listen (port,()=>{
    conexionDB()
    console.log(`Servidor ok en el puerto ${port}`);
    
})