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
/*   console.log(respuesta.data) */
        const posteos = respuesta.data;

  /*       limpiar la tabla antes de agregar los nuevos datos */
         bodyTablaPosteos.innerHTML = "";
  /*        Iterar sobre los datoa y agregar cada posteo a la tabla*/
  posteos.forEach (posteo=>{
    // creo una nueva fila
    const fila = document.createElement("tr")
    // crear celdas para titulo, contenido y acciones
    const celdaTitulo = document.createElement("td")
    const celdaContenido = document.createElement("td")
    const celdaAcciones = document.createElement("td")

   // asignar el contenido de las celdas
    celdaTitulo.textContent= posteo.titulo
    celdaContenido.textContent=posteo.contenido

   //crear el boton eliminar
    const botonEliminar = document.createElement("button")
    botonEliminar.textContent = "Eliminar"
    botonEliminar.addEventListener("click",()=>{borrarPosteoFront(posteo.id)})

    // crear el boton de editar un posteo
    const botonEditar = document.createElement("button")
    botonEditar.textContent = "Editar"
    botonEditar.addEventListener("click",()=>{
     // Redirigir a la pagina de edicion con el ID del post en la url
     window.location.href = `edit.html?id=${posteo.id}`
    })
    // agregar los botones a las celdas de acciones
    celdaAcciones.appendChild(botonEliminar)
    celdaAcciones.appendChild(botonEditar)

    // agregamos las celdas a la fila
    fila.appendChild(celdaTitulo)
    fila.appendChild(celdaContenido)
    fila.appendChild(celdaAcciones)

    //agregar la fila al cuerpo de la table
    bodyTablaPosteos.appendChild(fila)
  })

    } catch (error) {
        console.error(`Error al obtener los post: ${error}`)
    }
}

// funcion para eliminar un posteo
const borrarPosteoFront = async (id) =>{
    try {
        await axios.delete (`http://localhost:3030/posteos/${id}`)
        // reacargar la lisa de posteos despues de eliminar
        fetchPosteos()
    } catch (error) {
        console.error(`error al eliminar un post : ${error}`)
    }
}

// funcion para crear un nuevo posteo

formCrearPosteo.addEventListener("submit", async function (evento){
    evento.preventDefault();
    const nuevoPosteo ={
        titulo: document.querySelector("#nuevo-titulo").value,
        contenido:document.querySelector("#nuevo-contenido").value
    };
    try {
        await axios.post (`http://localhost:3030/posteos`,nuevoPosteo )
/*         limpiamos el formulario */
        formCrearPosteo.reset()
 /*        recargar los posteos actualizados */
 fetchPosteos()
    } catch (error) {
        console.error(`error al postear : ${error}`)
    }

})

/* llamar a la funcion para obtener y mostrar los posteos cuando carga la pagina */
 fetchPosteos()

})