const postModel = require("../models/postModel.js")

/* agregar el bloque try/catch */
// mostrar todos los posteos

exports.getAllPosts = async (req, res) => {
    const posts = await postModel.findAll({ include: "user" }); // incluir la informacion de user (autor/a)
    res.render("posts", { posts, userId: req.session.userId })
};

// Crear un post
exports.createPost = async (req, res) => {
    const { title, content } = req.body
    const userId = req.session.userId

    if (!userId) return res.redirect("/auth/login")// redirigir sino esta logueado/a

    try {
        await postModel.create({ title, content, userId });
        res.redirect("/posts")
    } catch (error) {
        res.status(500).json({ messahe: "error al crear post", error })
    }
}

//editar un post
exports.editPost = async (req, res) => {
    const { id, title, content } = req.body
    try {
        await postModel.update(
            { title, content },
            {
                where: { id, userId: req.session.userId }
            });
        res.redirect("/posts")

    } catch (error) {
        res.status(500).json({ message: "error al editar post", error })
    }

};

exports.deletePost = async (req,res)=>{
    const {id} = req.body;
    try {
        await postModel.destroy ({
            where: { id, userId: req.session.userId }
        })
    } catch (error) {
        res.status(500).json({ messahe: "error al eliminar post", error })  
    }
};