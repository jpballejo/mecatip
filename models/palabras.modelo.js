var mongoose= require('mongoose');
var palabrasSchema = require('../schemas/palabras.schema');
var random = require('mongoose-simple-random');
palabrasSchema.plugin(random);
module.exports= mongoose.model('palabra',palabrasSchema);
