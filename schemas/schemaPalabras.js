'use-strict'
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var palabraSchema = new Schema({
id:String,
palabra_frase:String,
nivel:Integer
});


module.exports= palabraSchema;
