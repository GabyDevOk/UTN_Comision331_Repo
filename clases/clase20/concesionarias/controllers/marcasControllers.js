/* requerimos fs para leer y escribir archivos en el sistema de archivos */
const fs = require("fs")

/* aca lo utilizaremos para leer un archivo JSON que contiene informacion de  concesionarias */

/* lectura del archivo JSON
leemos el archivo consecionarias.json de forma síncrona */
/* JSON.parse = convierte el contenido del archivo JSON en un objeto de JS para manipularlo mas facilmente en el codigo */
const concesionariasJSON = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"))

module.exports = {
    index: (req, res) => {
        let marcas = [];
        concesionariasJSON.forEach((sucursal) => {
            sucursal.autos.forEach((auto) => {
                if (marcas.includes(auto.marca) == false) {
                    marcas.push(auto.marca)
                }
            });
        });
        res.render("marcas", { title: "Marcas", marcas })
    },
    show: (req, res) => {
        let marcaReq = req.params.marca;
        let autosArray = []

        concesionariasJSON.forEach((sucursal) => {
            sucursal.autos.forEach((auto) => {
                if (marcaReq == auto.marca) {
                    autosArray.push({
                        "modelo": auto.modelo,
                        "anio": auto.anio,
                        "color": auto.color,
                        "sucursal": sucursal.sucursal,
                        "img": auto.img
                    });
                }
            });
        });
        if (autosArray.length>0){
          res.render("marcaDetalle",{
            autosArray,
            marcaReq,
            title: `${marcaReq}`
          });
        } else 
        res.render ("error",{
            titulo: "no pudimos encontrar esa marca",
            descripcion: "Intentalo nuevamente en las sucursales habilitadas",
            title:"ERROR"
        })
    }
}
