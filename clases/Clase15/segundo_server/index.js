const http = require ("http")

http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type": "text/plain"})
    if (req.url == "/"){
        res.end ("Este es el home")
    }else if (req.url == "/conocenos"){
        res.end ("estas en la seccion conocenos")
    }else {
        res.end ("Error 404")
    }

}).listen (3030, "localhost")