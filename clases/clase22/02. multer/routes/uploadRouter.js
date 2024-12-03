const express = require("express")
const router = express.Router()
const multerConfig = require("../middlewares/multerConfig.js")
const {formUpload,uploadFile} = require ("../controllers/uploadController.js")


// Ruta para renderizar el formulario de subida
router.get("/",formUpload)

router.post("/",multerConfig.single("file"),uploadFile)



module.exports = router