const {Sequelize} = require ("sequelize")

/* nombre de la db- user - contraseña - {donde esta alojada, lenguaje, puerto} */
const db = new Sequelize ("posteosutn","root","",{
    host : "localhost",
    dialect:"mysql",
    port: 3306
})


module.exports = db