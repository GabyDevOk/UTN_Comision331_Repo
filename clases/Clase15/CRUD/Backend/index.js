const express = require ("express")
const app = express()

const port = 3030

app.get ("/",(req,res)=>{
    res.send ("estas en el home del proyecto CRUD UTN")
} )

app.listen (port,()=>{
    console.log(`Servidor ok en el puerto ${port}`);
    
})