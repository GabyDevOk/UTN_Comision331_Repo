/* querySelector devuelve solo el primer elemento con la clase "elemento" */
const primerElemento = document.querySelector(".elemento")

/* metodo para acceder el contenido de texto que tiene el elemento */
/* document.write(`capturamos el elemento : ${primerElemento.textContent} `); */

const todoslosElementos = document.querySelectorAll(".elemento")


todoslosElementos.forEach ((elemento)=>{
    document.write(`este es el : ${elemento.textContent} `) 
})




