/* DOMContentLoaded */

document.addEventListener("DOMContentLoaded", ()=>{

/* obtener el body de la tabla donde queremos mostrar los posteos */
const bodyTablaPosteos = document.querySelector("#body-tabla-posteos")

/* obtener el formulario para crear un nuevo posteo */
const formCrearPosteo = document.querySelector("#form-crear-posteo")

/* funcion para obtener los datos de NUESTRA API utilizando AXIOS */

const fetchPosteos = async ()=>{
    try {
        const respuesta = await axios.get ( `http://localhost:3030/posteos`)
      /*   console.log(respuesta.data); */

    } catch (error) {
        console.error(`Error al obtener los post: ${error}`)
    }
}

/* fetchPosteos() */






})