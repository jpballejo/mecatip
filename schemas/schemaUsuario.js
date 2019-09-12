'use-strict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema({
  correo: String,
  nickname:String,
  password:String,
  imagenPerfil:String


});

module.exports=userSchema;
