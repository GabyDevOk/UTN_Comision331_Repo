/* requerimos fs para leer y escribir archivos en el sistema de archivos */
const fs = require ("fs")

/* aca lo utilizaremos para leer un archivo JSON que contiene informacion de  concesionarias */

/* lectura del archivo JSON
leemos el archivo consecionarias.json de forma síncrona */
/* JSON.parse = convierte el contenido del archivo JSON en un objeto de JS para manipularlo mas facilmente en el codigo */
const concesionariasJSON = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))

module.exports ={

index: (req,res)=>{
    res.render ("sucursales",{
        title:"Sucursales",nombre: "UTN Autos",concesionaria: concesionariasJSON
    })
},

show : (req,res)=>{
/*     guardamos en una variable elnombre de la sucursal */
let sucursalReq = req.params.sucursal
/* declarar variables cuyo valor pasamos luego */
let nombreSucursal;
let direccionSucursal;
let telefonoSucursal;
let cantidadAutos;
let autosArray;

concesionariasJSON.forEach(sucursal=>{ // lo recorremos y cuando coincida la sucursal que enviamos por paramos con una sucursal del JSON (parseado), le pasamos los valores a las variables
if (sucursalReq==sucursal.sucursal){
    nombreSucursal=sucursal.sucursal
    direccionSucursal= sucursal.direccion
    telefonoSucursal=sucursal.telefono
    cantidadAutos=sucursal.autos.length
    autosArray=sucursal.autos
    res.render("sucursalDetalle",{
        nombreSucursal,direccionSucursal,telefonoSucursal,cantidadAutos,autosArray,title: `${ nombreSucursal}`
    }
    )
}
})
res.render("error", {
    titulo:"no pudimos encontrar la sucursal",
    descripcion: "intentá buscar una sucursal habilitada",
    title: "ERROR"
})
}
}