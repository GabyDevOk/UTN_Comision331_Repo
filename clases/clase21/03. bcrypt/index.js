const bcryptjs = require ("bcryptjs")

/* input password para registro */
const passwordRegistro = "Contraseña123"

// encriptar 
let passEncriptada = bcryptjs.hashSync(passwordRegistro,8)

console.log(passEncriptada);


/* input password para loguearse */

let loginPassword = "Contraseña123"
let comparacion = bcryptjs.compareSync(loginPassword,passEncriptada)

console.log(comparacion);
