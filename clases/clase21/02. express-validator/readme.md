Que es? express-validator

Es una bilbioteca que valida datos enviados en formularios o APIS, para asegurarnos que cumplan ciertas reglas.
como formato e correo, longitud minima, etc


https://express-validator.github.io/docs/


----------------
app.use(bodyparser.urlencoded({ extended: false }))

el form envia los dats, el navegador los convierte a algo como esto
name=Juan&&password=123456

el miidleware bodyparser.urlencoded(), toma ese texto codificado y lo convierte a un objeto Javascript

{
    user: "juan",
    password: "123456"
}

podemos ahora, acceder facilmente a los valores del req.body.

// 
app.use(bodyparser.urlencoded({ extended: false }))
({ extended: false })

