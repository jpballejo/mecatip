
var modeloUsuario = require('../models/usuario.modelo');



exports.altaUsuario = function(req, res, next){

  var usuario = new modeloUsuario(req.body);

  usuario.save(function(err,user) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }

  });
}
