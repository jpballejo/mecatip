var express = require('express');
var controladorUsu = require('../controllers/pruebausuarios');
var router = express.Router();
var usuario = require('../controllers/usuario.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/altauser',usuario.altaUsuario);
router.put('/updateuser', (req,res,next)=>res.send('updateuser'));
router.delete('/deleteuser',(req,res,next)=>res.send('deleteuser'));

module.exports = router;
