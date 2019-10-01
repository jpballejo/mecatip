var express = require('express');

var router = express.Router();
console.log('rutas palabras');
router.get('/', function(req, res, next) {
  res.send("Bienvenido palabras!");
});


module.exports = router;
