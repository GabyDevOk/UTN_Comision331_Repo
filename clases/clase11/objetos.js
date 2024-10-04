// OBJETOS

const celular = {
   /*  clave  valor */
   marca : "Motorola",
   modelo : "V3",
   stock: true, 
   //metodos
   encender : ()=> (` celular : ${celular.marca} ${celular.modelo} ENCENDIDO`)
}

//asignacion de valores

const gigas = 128
 
/* celular.almacenamiento= gigas */
/* celular.almacenamiento= 128 */
/* celular["Almacenamiento"] = 128 */

// eliminar propiedades

/* delete celular.marca */

console.log(celular);

// notacion de puntos
     console.log(celular.modelo);
     console.log(celular.encender());

     //notacion de corchetes
     const modeloString= "modelo"
     console.log(celular["marca"]);
     console.log(celular[modeloString]);
     

     //SPREAD OPERATOR ...
  
     const generoPelicula ={
        nombreGenero: "Accion",
        puesto : 1,
        onLine : true
     }

     const elGranPez = {
        titulo : "El Gran Pez",
        popularidad :10,
        ...generoPelicula
     }
     console.log(elGranPez );
     console.log(elGranPez.nombreGenero);

     // destructuracion

    /*  copiar sin destructuracion */
    let nombre = elGranPez.titulo
    console.log(nombre);

/*  copiar con destructuracion */

let {titulo:nombrePeli,popularidad}  = elGranPez

console.log(nombrePeli);


//spread operator en arrays

let boxeo = ["Locche", "Acuña","Ballas","Martinez", "Oliveras"]

let boxeo2 = ["Carrera","Bonavena", "Marcos","Boop"]

let boxoTotal = [...boxeo,...boxeo2]

console.log(boxoTotal);


// destructuracion en arrays

let [nicolino,marcela] = boxeo
console.log(nicolino);

    
     

