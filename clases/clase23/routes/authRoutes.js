const express = require ("express");
const router = express.Router();

const {register,login,logout} = require ("../controllers/authController.js")

// modularizar las funciones que renderizan las vistas

// Ruta para mostrar la vista de registro 
router.get("/register",(req,res)=>{
    res.render("register") // renderizamos la vista register.ejs
});

//Ruta para mostrar la vista de login
router.get("/login",(req,res)=>{
    res.render("login") // renderizamos la vista login.ejs
});
//Ruta para manejar el registro
router.post("/register",register)
//Ruta para manejar el login
router.post("/login",login)
//Ruta para manejar el logout
router.get("/logout",logout)


module.exports = router; 
