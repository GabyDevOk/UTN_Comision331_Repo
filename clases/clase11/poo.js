/* #PILARES POO 

#ABSTRACCION    OK
#ENCAPSULACION  OK
#HERENCIA OK
#POLIMORFISMO OK

las propiedades privadas = #nombre

*/

class Libros {
    #autor
    #titulo
    #precio
    #stock
    #id
constructor (autor,titulo,precio,stock,id){
    this.#autor = autor,
    this.#titulo = titulo,
    this.#precio=precio,
    this.#stock=stock,
    this.#id=id
}
//metodo que muestra info
verInfo(){
    let info = (`Info del libro: ${this.#titulo}, autor : ${this.#autor}, precio ${this.#precio}, id: ${this.#id}`)
    return this.#stock>0 ? info+= ` stock: ${this.#stock}` : info+= " stock : no disponible"
}             
}

//instanciamos libros
const libro1= new Libros ("Guy des cars", "El Solitario",3500,10,"1")
const libro2 = new Libros ("J.K. Rowling", "Harry Potte y la Piedra Filosafal", 4500,0,"2")

console.log(libro1);
console.log(libro2);

console.log(libro1.titulo);
/* libro1.titulo = "otro"
 */

console.log(libro1.verInfo());
console.log(libro2.verInfo());

class Comics extends Libros {
    #volumen
    #ilustradores 
    constructor (autor,titulo,precio,stock,id,volumen,ilustradores){
        super(autor,titulo,precio,stock,id),// lo que heredo de libros
        this.#volumen = volumen, 
        this.#ilustradores = ilustradores
    }
    infoComic(){
        let info = `, ilustradores: ${this.#ilustradores}, volumen : ${this.#volumen} }`
        return `${this.verInfo()}, ${info}`
    }
    }

    const comic1 = new Comics ("Xmen","Stan Lee",1200,1,"10",5,["Ilustrador1", "Ilustradora2"])

    console.log(comic1.infoComic());
    
       