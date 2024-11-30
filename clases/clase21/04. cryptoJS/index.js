const cryptoJS = require ("crypto-js")

const mensaje = "LO DESCRUBISTE : Este es el mensaje secreto"
const clave = "mondongo"


/* ciframos el mensaje utilizando AES */

/* advanced Encryption Standard */

//encriptarlo
const mensajeEncriptado = cryptoJS.AES.encrypt(mensaje,clave).toString()
console.log(mensajeEncriptado);


//desencryptado

const mensajeDesencriptado = cryptoJS.AES.decrypt(mensajeEncriptado,"mondongo").toString(cryptoJS.enc.Utf8)

console.log(mensajeDesencriptado);


