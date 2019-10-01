var express = require('express');

var router = express.Router();
console.log('rutas juego');
router.get('/', function(req, res, next) {
  res.send("Bienvenido juego!");
});
module.exports = router;
