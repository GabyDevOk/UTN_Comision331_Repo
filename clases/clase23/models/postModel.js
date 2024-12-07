const sequelize = require ("../data/db.js") // configuracion de la base de datos
const {DataTypes} = require ("sequelize")
const userModel = require ("./userModel.js")

// definimos el modelo Post 
const postModel = sequelize.define("post",{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    title:{type:DataTypes.STRING,allowNull:false},
    content:{type:DataTypes.STRING,allowNull:false},
},
{timestamps:true});

postModel.belongsTo(userModel,{foreignKey:"userId",onDelete:"CASCADE"});
userModel.hasMany (postModel, {foreignKey:"userId"})

module.exports = postModel


/* postModel.belongsTo: permite que desde un Posteo accedamos al user al que pertenece

const post = await postModel.findByPK(1,{include:user})
post.user user que creo el post
 */
/* 
userModel.hasMany permite que desde un user accedamos a todos los posteos 

cnst user = await userModel.findByPk(1,{include:post});
user.post // lista de posteos  user
 */
/* 
onDelete:"CASCADE" si eliminamos un user eliminamos automaticamente tambien sus posts */


