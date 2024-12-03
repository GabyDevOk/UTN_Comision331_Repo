

module.exports = {

formUpload :  (req, res) => {
    res.render("upload", { message: "" })
},
uploadFile :  (req, res) => {
    if (!req.file) {
        //si no se envio un archivo, renderizamos el formulario con un mensaje
        return res.render("upload", { message: "no se subio un archivo" })
    }//si el archivo se subio correctamente , mostramos el mensaje
    res.render("upload", { message: `Archivo Subido : ${req.file.filename}` })
}
}