const express = require ("express")
const bcrypt = require ("bcryptjs")

const router = express.Router()

// Ruta para renderizar el formulario
router.get ("/",(req,res)=>{
    res.render("register", {message:""})
})

// Ruta para encriptar la contraseña
router.post ("/encrypt", async (req, res)=>{
    const {password} = req.body;
    //encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10)
    // Mostrar la contraseña Encriptada
    res.render("register",{message:`Contraseña encriptada : ${hashedPassword}`})

})

// Ruta para comparar la contraseña
router.post ("/compare",async(req,res)=>{
   const {comparePassword,hashedPassword}  = req.body
// comparamos la contraseña original con la encriptada
const isMatch = await bcrypt.compare (comparePassword,hashedPassword)
//Mostramos si coinciden o no
const message = isMatch ? "las contraseñas Coinciden" : "Las contraseñas NO COINCIDEN"
res.render("register",{message});

})



module.exports= router