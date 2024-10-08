const sonidoBatman = document.querySelector(".bati_encendido")
const sonidoBoton = document.querySelector(".bati_click")

const batman= document.querySelector(".batman")
const batmanBoton= document.querySelector(".bati_boton")

let estadoLinterna = "apagado"

// evento de hacer click en el boton
batmanBoton.onclick = ()=>{
    controlarLinterna()
}
// funciones

function controlarLinterna(){
    if(estadoLinterna=="apagado"){
        estadoLinterna = "encendido";
        sonidoLinterna()
   
        batman.classList.add("batman-activo")
    }else {
        estadoLinterna = "apagado"
        sonidoLinterna()
        batman.classList.remove("batman-activo")   
    }
}


// funcion SonidoLinterna

function sonidoLinterna(){
    if(sonidoBatman.paused){
        sonidoBoton.play()
        sonidoBatman.play()
    }else {
        sonidoBoton.play()
        sonidoBatman.pause()
        sonidoBatman.currentTime=0
    }
}


// ejercicio 
/* refactorizar codigo */
//pasar a funcion flecha
//pasar a if ternario


