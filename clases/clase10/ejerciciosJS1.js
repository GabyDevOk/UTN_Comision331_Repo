
// reemplaza `null` por la respuesta o el dato requerido

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "esto es una cadena de texto";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

const devolverString = str => str;console.log(devolverString("Cadena de texto")); 

const suma = (x, y) => x+y; console.log(suma(10,10));

const resta = (x, y) => x-y ; console.log(resta (21,7));

const multiplica = (x, y)=> x*y; console.log(multiplica (20,7));

const divide = (x, y) => x/y ; console.log(divide(21,7));

const sonIguales = (x, y) => x === y; console.log(sonIguales(4,3));
/* if (x===y){
  return true
}else {
  return false
} */

/*  return   x == y ? true : false */

/* -------------------- */
/* 
let hola = "hola"
console.log(hola.length);
 */

const tienenMismaLongitud = (str1, str2) => str1.length === str2.length 
console.log(tienenMismaLongitud("holas","chau"));

const menosQueNoventa=num => num<90 ; console.log(menosQueNoventa(91));

const mayorQueCincuenta =num => num> 50 ; console.log(mayorQueCincuenta(60));

const obtenerResto =(x, y)=> x%y ; console.log(obtenerResto(22,7));

const esPar = num => num%2===0 ; console.log(esPar(10));

/* const esImpar = num => num%2===1 ; console.log(esImpar(10)); */

/* const esImpar = num => !esPar(num); console.log(esImpar(10)) */
  
const esImpar = num => num%2!=0; console.log(esImpar(10)); 


/* const elevarAlCuadrado =num => num**2 ; console.log(elevarAlCuadrado(3));
const elevarAlCuadrado2 =num => num**2 ; console.log(elevarAlCuadrado(3)); */

const elevarAlCuadrado3 =num =>Math.pow(num,2) ; console.log(elevarAlCuadrado3(3)); 

const elevarAlCubo = num => Math.pow(num,3); console.log(elevarAlCubo(3));

const elevar = (num, exponent) => Math.pow(num,exponent) ; console.log(elevar(2,3));

const redondearNumero = (num)=> Math.round (num) ; console.log(redondearNumero (4.4));

const redondearHaciaArriba = (num) => Math.ceil(num); console.log(redondearHaciaArriba(3.1));
/* 
redondearHaciaAbajo = Math.floor */

const  numeroRandom = () => Math.random() ; console.log(numeroRandom());

const  numeroRandomEntero = () => Math.round(Math.random()*10) ; console.log(numeroRandomEntero());
/* console.log(numeroRandomEntero());
console.log(numeroRandomEntero());
console.log(numeroRandomEntero());
console.log(numeroRandomEntero());
console.log(numeroRandomEntero()); */

  //La función va a recibir un entero. Devuelve como resultado una cadena 
/*   de texto que indica si el número es positivo o negativo.  */
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

/* const esPositivo =numero=> {
if (numero>0){
return "Es positivo"
} else if (numero<0) {
  return "Es negativo"
}else {
  return false
}
} */
/* ----------------- */
const esPositivo =numero=>numero==0?false:numero>0?"Es positivo" : "Es Negativo"
console.log(esPositivo(-1));

/* otro ej */
/* const esPositivo2 = numero => numero > 0 ? `Es positivo: ${numero}`: numero < 0 ? `Es negativo: ${numero}` : false;
console.log(esPositivo2(2)); */


const agregarSimboloExclamacion = str => `${str} !`; 
/* const agregarSimboloExclamacion2 = str => str + "!";  */

console.log(agregarSimboloExclamacion("Hola mundo"));

const combinarNombres = (nombre, apellido) => `Hola soy ${nombre} y mi apellido es ${apellido} `;
console.log(combinarNombres ("Bruce", "Wayne"));

const obtenerSaludo = nombre => `Hola ${nombre}` ; console.log(obtenerSaludo ("Agostina"));

const obtenerAreaRectangulo = (alto, ancho) => ancho*alto ; console.log(obtenerAreaRectangulo(4,4));

const retornarPerimetro = lado => lado*4 ; console.log(retornarPerimetro(4));

const areaDelTriangulo = (base, altura) => base*altura/2 ; console.log(areaDelTriangulo(10,4));

const deEuroAdolar = euro => euro*1.2 ; console.log(deEuroAdolar(200));

/* Ejercitar */
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.


    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "es mas de un caracter".
    //si ingresa una consonante muestre en pantalla "es consonante"
  //Escribe tu código aquí

const esVocal =letra => { letra = letra.toLowerCase()
return  letra.length!=1 ? "Es mas de un caracter": (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u")? "Es Vocal" : "No es Vocal"
}
console.log(esVocal("M"));

/* 
  if (letra.length!=1){
    return "es mas de un caracter"
  } else if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u"){
    return `la letra ${letra} es VOCAL`
  }else {
    return `${letra} NO ES VOCAL` 
  }
 */

/* Podriamos usar https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match 
 y pasarle algo tipo letra.toLowerCase().match(/[aeiou]/) */

/*  letra.match(/[aeiou]/gi) gi  ignora mayusculas o minusculas */