'use strict'
const mongoose=require('mongoose');
var usuarioSchema = require('../schemas/schemaUsuario');

var modeloUsuario= mongoose.model('usuario',usuarioSchema);

module.exports= modeloUsuario;
