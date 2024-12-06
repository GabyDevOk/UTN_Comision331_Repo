npm i bcryptjs cors dotenv ejs express express-validator multer mysql2 sequelize express-session


blog
controllers
   authController.js   referido a personas users
   postController.js   referido a posteos 

data
  db.js    configuramos la base de datos con sequelize

models
 userModel.js  definimos el modelo para user : id-username-email-password(hasheado)-profilePicture (ruta de la foto de perfil)
 postModel.js  definimos el modelo para post : id -content -title - importante : relacion : un user puede tener multiples posts

uploads : fotos de perfil

views : vistas : register/login/posts/profile

.env

index.js
.gitignore

public css/images

package.json

agrego un readme con el codigo de mysql




-----------

app.use (express.json())
procesa datos enviados en formato JSON en el cuerpo de las solicitudes http(req.body)
{
  "username": "nameUser",
  "email": "useremail@user.com"
}

req.body.username y req.body.email

----------------------------------

app.use(express.urlencoded({extended:true}))
procesa datos enviados desde un HTML

si en un formulario enviamos datos como :
<form action="/auth/register" method="POST">
  <input type="text" name="username" value="testuser">
  <input type="email" name="email" value="test@example.com">
  <button type="submit">Enviar</button>
</form>

podemos acceder a los datos en el servidor req.body.username y req.body.email

{extended:true}: me permite trabajar con objetos anidados (mas complejos)
{
  "user:{
    "username": "usertest"
  }
}
----------------------------------------------
// configuracion de sesiones
app.use(
    session ({
        secret:"secret_key", // cambiar esto por una clave segura
        resave:false,
        saveUninitialized:false,
    })
)

1-secret_key
clave utilizada para firmar la cookie de la sesion, asegura que no pueda ser manipulada en el navegador del cliente

2- esta clave debe ser uncia y segura.
utilizar una heramienta como randomkeygen para generar una clave segura.
https://randomkeygen.com/

3-si es false : la sesion no se guardara en el almacenamiento del servidor, SI NO HUBO CAMBIOS EN ELLA
Mejora el rendimiento al evitar guardar la sesion sin necesidad

4- si es false , las sesiones no se crean automaticamente a menos que se guarde algo en ellas.
Util para reducir el numero de sesiones vacias almacenadas en el servidor


------------------------------------------------------------------------
Desglose paso a paso
1. sequelize.sync({ alter: true })
Este método sincroniza todos los modelos definidos con la base de datos. Veamos qué hace cada parte:

sequelize.sync()

Es un método de Sequelize que se utiliza para sincronizar los modelos con la base de datos.
Si una tabla no existe, la crea basándose en la definición del modelo.
Si la tabla ya existe, valida que coincida con la estructura del modelo.

{ alter: true }

Esta opción indica a Sequelize que realice los cambios necesarios para que las tablas existentes coincidan con los modelos.
Por ejemplo:
Si agregaste un nuevo campo al modelo, Sequelize lo añadirá en la tabla.
Si eliminaste un campo del modelo, Sequelize lo eliminará de la tabla.
2. .then(() => console.log('Base de datos sincronizada correctamente'))
Esto es una promesa que se ejecuta cuando la sincronización se realiza con éxito.
Muestra el mensaje en la consola indicando que la base de datos se ha sincronizado correctamente.
3. .catch((err) => console.error('Error al conectar a la base de datos:', err))
Este bloque captura cualquier error que ocurra durante la sincronización.
Muestra el error en la consola para que puedas diagnosticar el problema.

--------------------------------------
https://runebook.dev/es/docs/sequelize/core-concepts/validations-and-constraints/index