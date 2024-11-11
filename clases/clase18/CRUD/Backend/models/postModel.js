/* importar la base de datos */
const db = require ("../data/db.js")

const {DataTypes} = require ("sequelize")

/* nombre de la tabla y defina sus columnas y tipos de datos */

const postModel = db.define ("posteos",{
    titulo : {type:DataTypes.STRING},
    contenido : {type:DataTypes.STRING},
})

module.exports = postModel