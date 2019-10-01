/*var express = require('express');
var router = express.Router();

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;*/
exports.usuariosRoutes= require('./users.routes');
exports.palabrasRouter=require('./palabras.router');
exports.juegoRouter=require('./juego.routes');
exports.socketRoutes=require('./socket.routes');
exports.passportRoutes=require('./passport.routes');
