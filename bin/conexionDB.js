
'use strict'
/*var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost/elguardian';
var conOK = () =>{console.log("Connectado mongodb");}
var err = (err)=> {if (err) console.log(err);}

var conexion = mongoose.connect(url,{useNewUrlParser: true}).then(() => {

                // Cuando se realiza la conexión, lanzamos este mensaje por consola
            console.log('La conexión a MongoDB se ha realizado correctamente!!');
        })
        .catch(err => console.log(err));

module.exports= conexion;
*/

let mongoose = require('mongoose');

const server = 'localhost'; // REPLACE WITH YOUR DB SERVER
const database = 'mecatipdb';      // REPLACE WITH YOUR DB NAME

class Database {
  constructor() {
    this._connect()
  }

_connect() {
     mongoose.connect(`mongodb://${server}/${database}`,{useNewUrlParser: true,  useUnifiedTopology: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()
