var express = require('express');
var router = express.Router();
var controladorUsuario = require('../controllers/usuario.controller');
var cerberus = require('./cerberus/cerberus');
var isAuthorized=cerberus.isAuthorized;//valida admin
var isAuthenticated=cerberus.isAuthenticated;//valida session
/* RUTAS */
router.get('/', isAuthenticated, controladorUsuario.getUsuarios);
router.put('/update', isAuthenticated, controladorUsuario.updateUsuario);//???
router.get('/infoPerfil',isAuthenticated,controladorUsuario.getUsuario);
router.delete('/borrar', isAuthenticated, controladorUsuario.eliminarUsuario);
router.put('/changePassword', isAuthenticated, controladorUsuario.cambiarPassword);
router.put('/resetPasswd', controladorUsuario.resetPasswd);
router.get('/all', isAuthorized, controladorUsuario.listaUsuario);
module.exports = router;
