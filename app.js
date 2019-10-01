var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var conexionDb = require('./bin/conexion');
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');
var initPassport = require('./passport/modulo/init');
var utilidades = require('./utilidades/util');
var headers = require('./bin/headers');
var email= require('./email/nodeMail');
//var cabeceras = require('./bin/cabeceras');
//import de routes///////////////////////////////////////////
var passportRouter = require('./routes/passport.routes');
var usersRouter = require('./routes/users.routes');
var palabrasRouter = require('./routes/palabras.router');
var juegoRouter = require('./routes/juego.routes');
//////////////////////////////////////middleware////////////////////////////////////
//////////////////////////////////////
// view engine setup
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressSession({
  saveUninitialized: true,
  resave: true,
  secret: 'mySecretKey'
}));
//
app.use(headers);
//app.use(email.enviarMail);
//app.use(email.getMailOptions);
app.use(passport.initialize()); //para passport
initPassport(passport);
app.use(passport.session()); //para passport
//app.use(favicon());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(flash());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //directorio publico
////////////////////////////////////////////////////////////////////////////////////
//routes////////////////////////////////////////////////////////////////////////////
// Initialize Passport

app.use('/', passportRouter(passport)); //indice de rutas aca va socket y passport
app.use('/users', usersRouter); //rutas del usuario
app.use('/palabras', palabrasRouter); //rutas de la api para agregar y consumir palabras
app.use('/juego', juegoRouter); //rutas de la api del juego??
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
module.exports = app;
