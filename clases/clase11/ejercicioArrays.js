
/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */
 //                           0        1        2            3      4           5
const clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz","Eduardo"]
//                                                                                       6

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

document.write ("Posicion Inicial" + "<br>")

const mostrarClasificacion=()=>{
    for (let i=0;i<clasificaciones.length;i++){
        document.write((`${i+1}. ${clasificaciones[i]}<br>`))
    }
}

 mostrarClasificacion() 

/* --------Brian Romeo-----
 */
/* const mostrarClasificacion=()=>{
let tabla = ''
    // for (var key in clasificaciones) {
    //    tabla +=`${Number(key) + 1}: ${clasificaciones[key]}`;
        
    // }
    // return tabla;
    clasificaciones.forEach((clasificacion,key) => {
        tabla +=`${key + 1}: ${clasificacion} `;
    });
    return tabla;
}
console.log(mostrarClasificacion()); */
/* -----------------Brian Romeo----------------------------- */

//modo Correcto puede ser: ForEach (puedo usar tambien document.write)

/* 3)El concurso continua, y se van modificar esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

clasificaciones.splice(2,2,"Leon","Agostina")

/* clasificaciones[2]  = "Leon"
clasificaciones[3]  = "Agostina" */


/* b)Eduardo es descalificado y se elimina del concurso */


clasificaciones.pop("Eduardo")

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */
/* const clasificaciones = ["Marcos", "Franco", "Leon","Agostina",  "Juan Cruz"] */
clasificaciones.splice(1,0,"Julieta","Martina")

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

clasificaciones.unshift("Alicia")

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */
document.write ("<br>")
document.write ("POSICION FINAL" + "<br>")
mostrarClasificacion()
