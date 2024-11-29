const express = require ("express")

const {body,validationResult} = require ("express-validator") //middleware

const router = express.Router()


// Ruta para renderizar el formulario
router.get ("/register", (req,res)=>{
  res.render("register", {errors:[]}); // enviamos un array vacio al inicio  
})

// Ruta para procesar el registro con validaciones
router.post ("/register",
//middleware
[
   body("name").notEmpty().withMessage("El nombre es Obligatorio") ,
   body("email").isEmail().withMessage("Debes ser un email Valido"),
   body ("password").isLength({min:6}).withMessage("La contraseña debe tener al menos 6 caracteres"),
],
//controlador
(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        //si hay errores, renderizar la vista nuevamente con los mensajes
        return res.render("register", {errors:errors.array()});
    }
    // simulamos un registro exitoso
    res.send ("user registrado con exito")
}
)

module.exports =router


