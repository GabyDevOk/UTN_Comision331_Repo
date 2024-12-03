const bcrypt = require ("bcryptjs")

module.exports = {
 formRegister : (req,res)=>{
    res.render("register", {message:""})
},
encryptPass:  async (req, res)=>{
    const {password} = req.body;
    //encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)
    // Mostrar la contraseña Encriptada
    res.render("register",{message:`Contraseña encriptada : ${hashedPassword}`})

},
comparePass : async(req,res)=>{
    const {comparePassword,hashedPassword}  = req.body
 // comparamos la contraseña original con la encriptada
 const isMatch = await bcrypt.compare (comparePassword,hashedPassword)
 //Mostramos si coinciden o no
 const message = isMatch ? "las contraseñas Coinciden" : "Las contraseñas NO COINCIDEN"
 res.render("register",{message});
 
 }






}