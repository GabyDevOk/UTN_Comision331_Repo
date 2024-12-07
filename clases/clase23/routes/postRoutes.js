const express = require ("express");
const router = express.Router();

const {getAllPosts,createPost,editPost,deletePost} = require ("../controllers/postController.js")

router.get("/",getAllPosts)// Mostramos todos los posteos
router.post("/create",createPost) // crear un posteo
router.post ("/edit",editPost) //editar un posteo
router.post ("/delete",deletePost) //eliminar un posteo

module.exports = router; 
