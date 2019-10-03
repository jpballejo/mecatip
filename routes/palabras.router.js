var express = require('express');
var cerberus = require('./cerberus/cerberus');
var router = express.Router();
var controladorPalabras=require('../controllers/palabras.controller');
console.log('rutas palabras');
router.get('/', function(req, res, next) {
  res.send("Bienvenido palabras!");
});
/////////////////////////GET-GET-GET-GET-GET
router.get('/',cerberus.isAuthenticated,controladorPalabras.getPalabras);
router.get('/all',cerberus.isAuthorized,controladorPalabras.getAllPalabras);
router.get('/nivel',cerberus.isAuthenticated,controladorPalabras.palabrasXlvl);
router.get('/partida',cerberus.isAuthenticated,controladorPalabras.palabrasXPartida);
//////////////////////////////////////////////////////////////////////
///////////////////////POST-POST-POST-POST
router.post('/nuevaPalabra',cerberus.isAuthenticated,controladorPalabras.altaPalabra);
//////////////////////////////////////////////////////////////////////
///////////////////////DELETE-DELETE-DELETE-
router.delete('/borrar',cerberus.isAuthenticated,controladorPalabras.eliminarLogicamente);
router.delete('/remove',cerberus.isAuthorized,controladorPalabras.eliminarPalabra);
//////////////////////////////////////////////////////////////////////

module.exports = router;
