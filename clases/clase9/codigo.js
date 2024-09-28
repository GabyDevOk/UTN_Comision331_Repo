/* condicionales */
/* let nombre  = prompt ("Decime tu nombre")
let edad =  Number(prompt("decime tu edad"))

let mensajeTrue = `${nombre} podes pasar , tu edad es ${edad}`
let mensajeFalse = `${nombre} NO podes pasar , tu edad es ${edad}` */

/* condicion if else */
/*  si (condicion a evaluar es true) */
/* if (edad>=18){ */
 /*    alert (nombre + " podes pasar") */
/*  alert (`${nombre} podes pasar , tu edad es ${edad}`) */

/* }else{ *//* sino */
/*     alert (`${nombre} NO podes pasar , tu edad es ${edad}`)
} 
 */

/* if ternario */

/* condicioN ?  TRUE                                           :    FALSE */

/* edad>=18 ? alert (mensajeTrue ):alert (mensajeFalse) */

// condicion 
/* let nota = 8
let calificacion; */
/* if (nota <5){
    calificacion = "insuficiente"
}else if (nota<8){
    calificacion = "bien"
}else {
   calificacion = "sobresaliente"
}
 */


/* ternario */

/* nota <5? calificacion = "insuficiente": nota<8? calificacion = "bien" :   calificacion = "sobresaliente"

console.log(`Mi calificacion es ${calificacion}`);
 */

/* let edad = 17
let nombre = "Alicia"

 */
/* console.log(nombre.length); */ /* /cuento caracteres de un string */

/* if (edad>=18&&nombre.length>=6){
    console.log(`${nombre} tenes "${nombre.length} caracteres y ${edad} años ganaste`);
    
} else {
    console.log(`${nombre} tenes "${nombre.length} caracteres y ${edad} años... NO ganaste`);
} */

// pasar este ejemplo a Ternario

/* swich */

/* let semaforo = "veRde"


switch (semaforo.toLocaleLowerCase()){
    case "rojo" : console.log("no podes pasar");break;
    case "amarillo"  : console.log("precaucion");break;
    case "verde"  : console.log("podes avanzar");break;
    default :  console.log("no pusiste un color valido");
}
 */

/* Ejercicio switch  */
/* la persona en el navegador tiene que elegir : Libro , Pelicula o serie  */
/* dependiendo lo que elija le damos una recomendacion a traves de un alert  */

/* let nombre = prompt ("Ingresa tu nombre para que te hagamos una recomendación")
let eleccion = Number(prompt ("Ingresa el Nro 1 para Libro, 2 para Serie , 3 para Pelicula"))

switch (eleccion){
    case 1 : alert (`${nombre} Te recomiendo: el Solitario de Guy des cars`) ; break;
    case 2 : alert (`${nombre} Te recomiendo: Breaking Bad`); break;
    case 3 : alert (`${nombre} te recomiento : El gran pez de Tim Burton`); break;
    default : alert ( `${nombre} no elejiste una opcion correcta`)
} */

/*     estructuras de control */

/* while - bucles simples */

/* let numero = 450 */
/* mientras */
/* while (numero<1000){
numero++;
console.log(numero);
}
 */

/* do while - bucle simpe que se realiza como minimo una vez */
/* do {
    numero++
    console.log(numero);
}while (numero <460)
 */

/* for basico por exelencia */

/* for (let i = 1; i<=10;i++){
console.log(2*i);
}

for (i=0;i<5;i++){
    console.log(`el valor de i es : ${i}`);
} */

/* funciones */
/* 
function saludar () {
    console.log("soy una funcion");
}
saludar() */

                  // parametros
/* function saludo2 (nombre,edad) {
   return (`Hola ${nombre} tu edad es ${edad}`); 
} */
/* console.log(saludo2("Juan",38)) */  // argumentos
/* console.log(saludo2("Agostina",27)) */

/* 
function suma (num1,num2){
    return num1+num2
}
console.log(suma(10,10));
 */

/* funciones flecha */

const resta = (num1,num2) =>{return num1-num2};console.log(resta(10,5));

const resta2 = (num1,num2) =>num1-num2;console.log(resta(10,5));

const saludo3 = nombre=>`hola ${nombre}`;console.log(saludo3("Marcos"));

/* callback */

const calculadora = (num1,num2,operacion)=>operacion (num1,num2)

const sumar = (num1,num2)=>num1+num2
const restar = (num1,num2)=>num1-num2
const multiplicar = (num1,num2)=>num1*num2
const dividir = (num1,num2)=>num1/num2

console.log(calculadora(10,2,sumar));
console.log(calculadora(10,2,restar));
console.log(calculadora(10,2,multiplicar));
console.log(calculadora(10,2,dividir));

/* Math  */

console.log(Math.pow (2,3));
const elevar = (num, exponente) => Math.pow(num,exponente); console.log(elevar(2,3));

console.log(Math.round(4.1));/*  redondea al entero mas cercano */
console.log(Math.ceil(4.1)); /* redondea al entero hacia arriba */
console.log(Math.floor(4.9)); /* redondea al entero hacia abajo */

console.log(Math.round(Math.random()*10));
console.log(Math.round(Math.random()*10));
console.log(Math.round(Math.random()*10));
console.log(Math.round(Math.random()*10));
console.log(Math.round(Math.random()*10));
console.log(Math.round(Math.random()*10));
console.log(Math.round(Math.random()*10));

/* pedir a user adivine un numero. 
el numero = math random
3 oportunidades */

console.log(Math.max(10,20,5,10,5,100,101));

console.log(Math.min(1,20,5,10,5,100,101));











