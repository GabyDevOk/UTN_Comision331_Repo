const sequelize = require ("./data/db.js") // configuracion de la base de datos
const {DataTypes} = require ("sequelize")

// definicion del user 
const UserModel = sequelize.define("user",{
    id:{type:DataTypes.INTEGER,autoIncrement:true,primaryKey:true},
    username:{type:DataTypes.STRING,allosNull:false,unique:true},
    email:{type:DataTypes.STRING,allowNull:false,unique:true,validate:{isEmail:true}},
    password: {type:DataTypes.STRING, allowNull:false},
    profilePicture : {type:DataTypes.STRING, allowNull:true}, // Ruta de la foro de perfil
},
{timestamps:true});

module.exports= UserModel


/* allowNull:equivale a NOT NULL 
unique:true : sequelize genera una restriccion, de unicidad en la db para este campo 
NO PUEDEN EXISTIR DOS REGISTROS CON EL MISMO VALOS EN ESTA COLUMNA

validate:{isEmail:true}: FUNCIONALIDAD NATIVA DE SEQUELIZE
*/
