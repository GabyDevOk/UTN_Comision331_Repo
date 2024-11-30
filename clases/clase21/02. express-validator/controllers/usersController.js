const {validationResult} = require ("express-validator") //middleware

module.exports = {
    showForm : (req,res)=>{
        res.render("register", {errors:[]}); // enviamos un array vacio al inicio  
      },
      validatorForm : //controlador
      (req,res)=>{
          const errors = validationResult(req);
          if (!errors.isEmpty()){
              //si hay errores, renderizar la vista nuevamente con los mensajes
              return res.render("register", {errors:errors.array()});
          }
          // simulamos un registro exitoso
          res.send ("user registrado con exito")
      }


}