const userModel = require ("../models/userModel.js")
const bcrypt = require ("bcryptjs")

// registrar user

exports.register = async (req,res)=>{
    const {username,email,password}= req.body

    try {
        //hasshear la contraseña
        const hashedPassword = await bcrypt.hash(password,10);

        //creamos la persona en la base de datos
        const user = await userModel.create({username,email,password:hashedPassword})
        //Guardar el ID de la persona en la sesion y redirigir
        req.session.userId = user.userIdres.redirect("/posts")
    } catch (error) {
        console.error('Error al registrar usuario:', error); // Imprime el error en la consola para depuración
        res.status(500).json({ message: 'Error al registrar usuario', error: error.message || error });
    }

};
exports.login= async (req,res)=>{
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({
            where:{email}
        })
        if (!user) return res.status(400).json ({message: "user no encontrado"})
        const isMatch = await bcrypt.compare (password,user.password)
        if (!isMatch) return res.status(400).json ({message: "contraseña Incorrecta"})

            req.session.userId = user.id  // guardamos el id del la persona en la sesion
            res.redirect("/posts"); // redirigmos a la lista de posts
        
    } catch (error) {
        res.status(500).json ({message: "error al iniciar sesion", error})    
    }
}

// logout
exports.logout = (req,res)=>{
    res.session.destroy(()=>{
        res.redirect("auth/login") // redirigimos a la pagina de login
    })
}
