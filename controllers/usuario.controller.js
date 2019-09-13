var Usuario = require('../models/usuario.modelo');

/**
 * [description]
 * @param  {[type]}   req  [request]
 * @param  {[type]}   res  [response]
 * @param  {Function} next [function next()]
 * @return {[json]}        [retorna viste un error si falla o sino un json con el objeto representado ya tu sabe...]
 */

exports.altaUsuario = function(req, res, next) {

  var usuario = new Usuario(req.body);

  usuario.save(function(err, user) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }

  });
}

//agregar cascade:true
/**
 * [listaUsuario description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.listaUsuario = (req, res, next) => {
  Usuario.find({}, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }

  });

  //separar mas esto, definir una clase mas que contiene los metodos de los modelos y los ejecuta recibiendo o devolviendo parametros

};

/**
 * [getUsuario description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getUsuario = (req, res, next) => {
  Usuario.findById(id, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }

  })


};
/**
 * [updateUsuario description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.updateUsuario = (req, res, next) => {
  Usuario.findByIdAndUpdate(req.usuario.id, req.body, (err, usuario) => {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }

  });

};
/**
 * [removeUsuario description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.removeUsuario=(req,res,next)=>{
req.usuario.remove((err)=>{
  if(err){return next(err);}
  else{res.json(req.usuario);}
});

};

//usar modificadores para los modelos 
