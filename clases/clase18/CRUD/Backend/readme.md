XAMPP Control Panel
MySQL Workbench 8.0 CE


CORS
CORS: qué es y cómo funciona el cross-origin resource sharing
Cuando se abre una página web, cargar datos de servidores ajenos está, en teoría, estrictamente prohibido. Sin embargo, puede haber excepciones: si los administradores de ambas webs han acordado trabajar juntos, no hay por qué evitar el intercambio. En estos casos, el llamado cross-origin resource sharing (CORS) regula la colaboración. Te explicamos cómo funciona.

https://developer.mozilla.org/es/docs/Web/HTTP/CORS

¿Qué es CORS en Express?
Intercambio de Recursos de Origen Cruzado (CORS) es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador.


express.json()
La función express.json() es una función de middleware integrada en Express. Analiza las requests entrantes con cargas JSON
https://barcelonageeks.com/funcion-express-js-express-json/


--------------
## CORS

Resumen
CORS permite(compartir recursos de origen cruzado). Para que su servidor sea accesible por otros orígenes (dominios).

lo que realmente hace
La llamada use(cors())le permitirá express server responder a las solicitudes de verificación previa.

Una solicitud de verificación previa es básicamente una OPTION solicitud enviada al servidor antes de que se envíe la solicitud real, para preguntar qué origen y qué opciones de solicitud acepta el servidor.

básicamente CORS es un conjunto de encabezados enviados por el servidor al navegador. llamar cors()sin información adicional establecerá los siguientes valores predeterminados:

{
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
estos se traducen en estos encabezados:

Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE
Status Code: 204
Básicamente, lo que está haciendo es hacer que su servidor sea accesible para cualquier dominio que solicite un recurso de su servidor a través de un navegador.

puede consultar todas las corsconfiguraciones express aquí: https://github.com/expressjs/cors

también puede leer más sobre el navegador corsaquí: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS

uando hacemos peticiones AJAX con jQuery o Angular a un backend o un API REST es normal que tengamos problemas con el acceso CORS en NodeJS y nos fallen las peticiones.

Para eso podemos crear un middleware como este:

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();


## express.json()

/* express.json()es una función de middleware integrada en Express a partir de v4.16.0. Analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body */

fuente:
https://masteringjs-io.translate.goog/tutorials/express/express-json?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=sc

https://expressjs.com/en/resources/middleware/cors.html

