

const obtenerMayor = (x, y) => Math.max(x,y) ; console.log(obtenerMayor(100,400));
                                /*   x>y ?x: y */

const mayoriaDeEdad = edad => edad >=18 ? "Allowed" : "Not allowed"; console.log(mayoriaDeEdad (14));
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"


const conection = status=> status ==1 ? "Online" : status==2 ? "Away": "Offline"; console.log(conection(3));
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.


const saludo = idioma => idioma =="aleman" ?"Guten Tag!" :idioma =="mandarin" ? "Ni Hao!" :idioma =="ingles" ?"Hello!" :"Hola!"
console.log(saludo("ingles"));
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:


const colors  = color => {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "colour not found!"
  //Usar el statement Switch.
 
  switch (color.toLowerCase()){
    case "blue" : return "This is blue";
    case "red" :return   "This is red";
    case "green" :return  "This is green";
    case "orange" : return  "This is orange";
    default :return  "colour not found!";
  }

}
console.log(colors("RED"));

const esDiezOCinco = numero => numero ==10 || numero ==5 ; console.log(esDiezOCinco(6));

const estaEnRango = numero=> numero >20&&numero <50 ; console.log(estaEnRango(455));
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

const esEntero = numero => numero === Math.floor (numero) ; console.log(esEntero (10.5));

  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:




const  fizzBuzz = numero => {
  let retorno = ""
  if (numero%3===0) retorno += "fizz";
  if (numero%5===0) retorno += "buzz"
  return retorno || numero
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

}
console.log(fizzBuzz(7));



const operadoresLogicos= (num1, num2, num3) => {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
return num1===0||num2===0||num3===0? "Error" :num1<0||num2<0||num3<0? "Hay negativos" : num1>Math.max(num2,num3)?"Numero 1 es mayor y positivo" : num3>Math.max(num1,num2) ?++num3 : false
}
console.log(operadoresLogicos(10,40,30));



const esPrimo = numero => {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero===0||numero ===1){
    false
  }
  for (i=2;i<numero;i++){
    if(numero%i===0){
      false
    }
  }
return numero!==1&&numero!==0
}
console.log(esPrimo(1));

const esVerdadero =valor=> valor ? "Soy Verdadero" : "Soy Falso" ; console.log(esVerdadero(false));
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

const tablaDelSeis = ()=>{
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  let tabla = []
  for (i=1;i<=10;i++){
    tabla.push (6*i)
  }
  return tabla
}
console.log(tablaDelSeis());


const tieneTresDigitos = numero => numero>=100&&numero<1000 ; console.log(tieneTresDigitos (100));

const tieneTresDigitos2 =numero => String(numero).length==3 ; console.log(tieneTresDigitos2(100));


  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí

const doWhile = numero => {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0
  do {
    numero +=5
/*     numero = numero + 5 */
    i++
  } while (i<8)
return numero

}
 console.log(doWhile(10));
 
