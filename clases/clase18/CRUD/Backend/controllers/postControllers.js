const { UPDATE } = require("sequelize/lib/query-types")
const postsModel = require ("../models/postModel.js")
/* C      R       U          D 
CREATE - READ - UPDATE - DELETE
*/

/* FUNCION PARA TRAER TODOS LOS posteos
READ
GET */
const traerPosteos = async (req,res)=>{
try {
  const posteos = await postsModel.findAll()
  res.json(posteos)
} catch (error) {
  res.json({message:error.message})
}
}
/* FUNCION PARA TRAER TODOS un posteo
READ
GET */

const traerPost = async (req,res)=>{
try {
  const posteo = await postsModel.findByPk(req.params.id)
  res.json(posteo)
} catch (error) {
  res.json({message:error.message})
}

}

/* FUNCION QUE CREA UN REGISTRO 
CREATE 
POST */

const crearPosteo = async (req,res)=>{
  try {
    await postsModel.create(req.body)
    res.json("registro creado correctamente");
    
  } catch (error) {
    res.json({message:error.message})
  }
}

/* FUNCION PARA ACTUALIZAR UN REGISTRO
UPDATE
PUT  */
 const actualizarPosteo= async (req,res)=>{
  try {
    await postsModel.update (req.body,{
      where:{id:req.params.id}
    })
    res.json ( "Registro Actualizado Correctamente")
  } catch (error) {
    res.json({message:error.message})
  }
 }

 const borrarPosteo = async (req,res)=>{
  try {
    await postsModel.destroy({
      where:{id:req.params.id}
    })
    res.json ( "Registro Borrado Correctamente")
  } catch (error) {
    res.json({message:error.message})
  }
 }



module.exports = {traerPosteos,traerPost,crearPosteo,actualizarPosteo,borrarPosteo}