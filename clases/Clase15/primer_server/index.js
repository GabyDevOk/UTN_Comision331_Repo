const http = require ("http") // http es un modulo nativo de node

http.createServer ((req,res)=>{ // funcion create server , con el callback (req,res)
res.writeHead(200,{"content-Type": "text/plain"}) // contenido de texto plano
res.end ("Primer Server Node UTN") //texto de salida
}).listen (3030,"localhost") //escucha + puerto y origen del servidor