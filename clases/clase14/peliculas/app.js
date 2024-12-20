/* pasar a axios
editar CSS
usar if ternario
mostrar el numero de la pagina 
*/

//funcion para cargar peliculas
window.addEventListener("load", () => {
    cargarPeliculas();
  });
  
  //variable para controlar la paginacion
  let pagina = 1;
  
  // captures los botones
  
  let btnAnterior = document.querySelector(".btnAnterior");
  let btnSiguiente = document.querySelector(".btnSiguiente");
  
  // funcion BTN Anterior
  
  btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
      pagina -= 1; //--
      /*   pagina= pagina-1  */
  
      //funcion que carga las peliculas
      cargarPeliculas();
    }
  });
  // funcion BTN Siguiente
  btnSiguiente.addEventListener("click", () => {
    if (pagina < 500) {
      pagina += 1; //++
      /*   pagina= pagina+1  */
  
      //funcion que carga las peliculas
      cargarPeliculas();
    }
  });
  
// funcion que carga y muestra las peliculas


/* funcion que cargue y muestre las peliculas */
const cargarPeliculas = async () => {
    /* declaramos el endpoint */
const URL_FETCH = `https://api.themoviedb.org/3/movie/popular?api_key=73b96ddc25658ad17c90440e7f61bd67&language=es-MX&page=${pagina}`
    try {
        let respuesta = await fetch(URL_FETCH)
        /*   console.log(respuesta);  */
        if (respuesta.status == 200) {
            let datos = await respuesta.json()
            /*   console.log(datos.results); */
            let peliculas = "";

            datos.results.forEach((pelicula) => {
                peliculas += `<div class="pelicula">
            <img class= "poster" src = "https://image.tmdb.org/t/p/w500${pelicula.poster_path}"/>
            <h3 class= "titulo">${pelicula.title}</h3>
            </div>`
                document.querySelector(".contenedor").innerHTML = peliculas;
            })
        }
        else if (respuesta.status === 404) {
            console.log("error 404 te redirijo a otro lugar");
        }


    } catch (error) {
        console.log(error);

    }
}
