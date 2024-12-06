const {Sequelize} = require ("sequelize")

/* nombre de la db- user - contraseña - {donde esta alojada, lenguaje, puerto} */
const sequelize = new Sequelize (process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host : process.env.DB_HOST,
    dialect:"mysql",
    port: process.env.DB_PORT
})


module.exports = sequelize

