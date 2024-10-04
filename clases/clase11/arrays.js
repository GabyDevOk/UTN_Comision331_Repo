
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
  
  //METODOS DE ARRAY
  
  // join ()
  // concat ()
  
  /* splice : cambia el contenido de un array eliminando los elementos existentes y/o aagregando nuevos elementos */
  
  /* animales.splice(0,4,"Cocodrilo")
  console.log(animales); */
  
  // slice: devuelve una copia de una parte  del array dentro de un nuevo array, 
  //empezando por el inicio hasta el fin (fin no incluido )
  /* let nuevoArray = animales.slice(0,3) 
  console.log(nuevoArray );
   */
  
  /* 
  reduce : aplica una funcion a un acumulador y a cada valor del array (de izquierda a derecha) y lo reduce a un unico valor */
  
  /* const resultado = numeros.reduce((acumulador,actual)=>acumulador+actual)
  console.log(resultado);
   */
  
  //includes : determina si un array incluye un determinado elemento y retorna un booleano segun corresponda
  /* console.log(animales.includes("Rata")); */
  
  //every : es similar a some() , itera el array y retorna un booleano, 
  //pero esta vez si todos los elementos cumplen la condicion dada
  
  /* let every = numeros.every(numero=>numero>1)
  console.log(every);
   */
  
  //some:  recorre el array y retorna un booleano si como minimo uno de los elemento presentes en el array pasa una condicion 
  /* let menorQueCuatro = numeros.some (numero=>numero>4)
  console.log(menorQueCuatro); */
  
  // find : recorre el array y retorna la primer coincidencia del elemento que se busca
  
  /* const mayorATres = numeros.find ( numero => numero>3)
  console.log(mayorATres);
  const dog = animales.find (animal => animal === "Perro")
  console.log(dog);
   */
  
  /* forEach */
  // permite irer el contenido de un array, 
  //recibe un callback que tomo como parametroe el elemento actual de la iteracion y el indice
  /* animales.forEach((e,i)=>{console.log(`animal: ${e} esta en la posicion ${i}`)}) */
  
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