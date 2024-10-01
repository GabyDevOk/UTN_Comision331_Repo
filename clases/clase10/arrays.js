
  // indice       0          1         2
let frutas  = ["manzana","naranja","pera"]
// longitud .length 3 

/* 
devolver el ultimo dato de un array */
                         /* 2 */
console.log(frutas[frutas.length-1]);
// acceder a los elementos :
console.log(frutas[0]);
console.log(frutas[2]);

frutas [1] = "Banana"
console.log(frutas);

console.log(frutas.length);


 // indice         0       1       2       3        4    5        6         7
let animales = ["Gato", "Perro","Tigre","Conejo","Pez","Carpincho","Tortuga", "Gato"]
let numeros = [1,2,8,7,4,6,7,3]

/* forEach */
// permite irer el contenido de un array, 
//recibe un callback que tomo como parametroe el elemento actual de la iteracion y el indice
animales.forEach((e,i)=>{console.log(`animal: ${e} esta en la posicion ${i}`)})


//METODOS DE ARRAY

// map
// permite recorrer el array y modificar los elementos presentes en el, retorna un nuevo array con la misma longitud

/* let nuevoArray = numeros.map(elementos => elementos*10)
console.log(nuevoArray);
 */
//filter 
//recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condicion

/* let nuevoArray =  animales.filter (e=>e==="Perro"||e==="Gato")
console.log(nuevoArray); */

/* forEach */
// permite irer el contenido de un array, 
//recibe un callback que tomo como parametroe el elemento actual de la iteracion y el indice





// push
/* agrega un dato al final del array */
animales.push("Cocodrilo")
console.log(animales);

//pop
/* elimina el elemento al final del array */
animales.pop()
console.log(animales);

// unshift 
// agrega un dato al inicio del array
animales.unshift("Elefante")
console.log(animales);

// shift
//elimina el primer dato del array
animales.shift()
console.log(animales);






