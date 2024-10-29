const express = require ("express")
const app = express()

const port = 3030

app.get("/",(req,res)=>{
res.send ("estas en el home del servidor creado con express")
})

app.get ("/conocenos",(req,res)=>{
    res.send ("estas en la seccion conocenos del server creado con express")
})

app.get ("/users",(req,res)=>{
    res.send ("estas en users")
})

app.listen (port,()=>
console.log(`server ok en el puerto ${port}`)
)













/* console.log(express); */


/* METODOS HTTP */

/* GET POST PUT DELETE */

/* CRUD  */

/* CREATE- POST
READ - GET 
UPDATE - PUT
DELETE - DELETE */