/* document.write ("Hola que tal") */

// Selectores css
/* h1 = tag
.elemento = Clase
#elemento = ID */

/* por tag / etiqueta */

/* const titulo = document.getElementsByTagName("h1")
const parrafo = document.getElementsByClassName("parrafo")
const subtitulo = document.getElementById ("subtitulo") */

/*  const titulo = document.querySelectorAll("p")
 console.log(titulo); */
 

/*  NodeList = lista de Nodos = se parece a un array , 
 no tiene todos los metodos de un array , 
 sin embargo puedo recorrerlo con un bucle o 
 convertirlo en un array si es necesario */

 const hacheTres = document.querySelector("h3")

/* hacheTres.innerText = "Estoy escribiendo de forma dinamica" */

hacheTres.innerHTML = `<a href="./querySelectorVSQuerySelectorAll.html">Presiona aca</a>`

const btn = document.createElement("button") // creando un boton y guardarlo en btn
      btn.innerText = "Enviar"         // creamos el texto dentro del boton

/* capturamos el div */

const contenedor = document.querySelector(".contenedor")
contenedor.appendChild(btn)

const h1 = document.createElement("h1") // creamos el h1
const textNode = document.createTextNode("Hola este es el titulo dinamico") // creamos el texto
h1.appendChild(textNode)    // colocar el texto dentro del h1
document.body.appendChild(h1) // ponemos el <h1> dentro del <body>


const divImagen = document.querySelector(".imagen")
divImagen.innerHTML= `<img src="https://imgs.search.brave.com/HxsIMbItz_dQivtNgeLvbI7egmwxBXRKDd4oXXF0V6c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I0L0xp/b25lbC1NZXNzaS1B/cmdlbnRpbmEtMjAy/Mi1GSUZBLVdvcmxk/LUN1cF8lMjhjcm9w/cGVkJTI5LmpwZy81/MTJweC1MaW9uZWwt/TWVzc2ktQXJnZW50/aW5hLTIwMjItRklG/QS1Xb3JsZC1DdXBf/JTI4Y3JvcHBlZCUy/OS5qcGc" alt= "imagen dinamica">`


/* cambiar contenido */
/* document.querySelector("h4").innerText = "Texto Cambiado"
 */

/* document.querySelector(".compras").innerText += "Papitas" */


// Selecciona el elemento h2
const h2Element = document.getElementById('titulo');
        
// Cambia la palabra "original" por "modificado"
h2Element.textContent = h2Element.textContent.replace('original', 'modificado');
/* para cambiar una palabra especifica */