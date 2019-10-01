var Usuario = require('../models/usuario.modelo'); //importo el modelo
var utilidades = require('../utilidades/util');
/*
Controlador: Usuario
Create: by Jp.
 */
/////////////////////////////////////listaUsuarios-GET/////////////////////////////////////////////////////////////////////////////////////
/**
 * [listaUsuario Lista todos los usuarios del sistema]
 * @param  {[type]}   req  [request]
 * @param  {[type]}   res  [response]
 * @param  {Function} next [funcion next()]
 * @return {[type]}        [retorna un json con el array de usuarios]
 */
exports.listaUsuario = (req, res, next) => {
  Usuario.find({}, (err, user) => {
    if(err) {
      return next(err);
    } else {
      res.status(200);
      res.json(user);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////getUsuarios-GET/////////////////////////////////////////////////////////////////////////////////////
/**
 * [getUsuarios Funcion que lista los usuarios activos descrimindo los campos (password,proveedor,proveedorId)]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getUsuarios = (req, res, next) => {
  var query = Usuario.find({});
  query.where({
    isOcultar: false
  }); //filtra la eliminacion logica
  query.populate('infoPartida');
  query.select('-password -proovedor -proveedorId');
  query.exec((err, usuarios) => {
    if(err) {
      return next(err);
    } else {
      res.status(200);
      res.json(usuarios);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////getUsuario-GET//////////////////////////////////////////////////////////////////////////////////////
/**
 * [getUsuario description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.getUsuario = (req, res, next) => {
  var query = Usuario.findOne({
    username: req.user.username
  });
  query.where({
    isOcultar: false
  });
  query.populate('infoPartida');
  query.select('-password -proovedor -proveedorId');
  query.exec((err, user) => {
    if(err) {
      return next(err);
    } else {
      res.status(200);
      res.json(user);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////updateUsuario-PUT/////////////////////////////////////////////////////////////////////////////////////
/**
 * [updateUsuario Actualiza un usuario]
 * @param  {[type]}   req  [se debe definir un json en la cleve newUser]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.updateUsuario = (req, res, next) => {
  //req.newUser tiene que ser un json {'clave':'valor'}
  Usuario.findByIdAndUpdate(req.user.id, req.body, (err, usuario) => {
    if(err) {
      return next(err);
    } else {
      res.status(200);
      res.json(user);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////eliminarUsuario-DELETE/////////////////////////////////////////////////////////////////////////////////////
/**
 * [eliminarUsuario description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.eliminarUsuario = (req, res, next) => {
  console.log("username", req.user.username);
  Usuario.where({
    username: req.user.username
  }).update({
    isOcultar: true
  }).exec(() => {
    req.logout();
    res.status(200);
    return res.send('OK Usuario Eliminado');
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////removeUsuarioById-DELETE/////////////////////////////////////////////////////////////////////////////////////
/**
 * [removeUsuarioById description]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.removeUsuarioById = (req, res, next) => {
  Usuario.findByIdAndRemove(req.user.id, function(user, err) {
    if(err) {
      return next(err);
    } else {
      res.status(200);
      res.send('Usuario removido')
      res.json(user);
    }
  })
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////cambiarPassword-PUT/////////////////////////////////////////////////////////////////////////////////////
exports.cambiarPassword = (req, res, next) => {
  var query = {
    username: req.user.username
  };
  Usuario.where(query).update({
    password: util.hashPassword(req.newPassword)
  }).exec(() => res.send('OK'));
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////resetPasswd-POST///////////////////////////////////////////////////////////////////////////////
exports.resetPasswd = (req, res, next) => {
  Usuario.findOne({
    email: req.body.email
  }, (err, user) => {
    console.log(user, req.body.email);
    var cadena = utilidades.generarCadena();
    user.password = cadena;
    user.save((err, user) => {
      if(err) next(err);
      if(user) {
        res.send('Password reset ok.');
        var mailOP = req.getMailOptions();
        mailOP.from='jballejo@gmail.com';
        mailOP.to=req.body.email;
        mailOP.subject='Reset Password';
        mailOP.text= 'Su contraseña autogenerada: ',cadena;
        req.enviarMail(mailOP);
        //utilidades.resetPswd(user, cadena);
      }
    })
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////****************/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////****************/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
