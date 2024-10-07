 

/*  1- LOAD-
 el evento onload es un evento que nos permite que todo el script,
 se ejecute cuando se cargue el html por completo.LOAD

 el objeto documento - dentro del objeto windows */

/*  window.onload = ()=>{
    alert ("se cargo el documento")
 }
 */
/* 
 2- CLICK
 el evento onclick nos permite ejecutar una accion cuando se haga click sobre el elemento al cual le estamos aplicando la propiedad */

 const boton = document.querySelector(".btn")
 boton.onclick = ()=>{
    alert  ("Hiciste click")
 }

/*  3- PREVENT DEFAULT
 el preventDefault() nos permite evitar que se ejecute
 el evento predeterminado o nativo del elemento al cual se lo estamos aplicando
 podemos usarlo , por ejemplo, para prevenir que una etiquera <a></a> se comporte de manera nativa y que en lugar de eso haga otra accion. */

 const hipervinculo = document.querySelector("a")

/* const mensaje = () =>{
    alert ("presionaste la etiqueta A")
}
 */
hipervinculo.onclick= (event)=>{
    alert ("presionaste la etiqueta A")
    event.preventDefault()
}
/* 
hipervinculo.addEventListener ("click", (event)=>{
    alert ("presionaste la etiqueta A")
    event.preventDefault()
})

hipervinculo.addEventListener ("click",function(event){
    alert ("presionaste la etiqueta A")
    event.preventDefault()
}) */


/* 4 mouseover   */
const parrafo = document.querySelector("p")
/* parrafo.onmouseover =()=>{
    alert("entraste al parrafo")
} 
*/
/* 5 mouseuot   */
/* 
parrafo.onmouseout =()=>{
    alert("saliste del parrafo")
}

 */

/* eventos del teclado */

const inputName = document.querySelector("#inputName")

