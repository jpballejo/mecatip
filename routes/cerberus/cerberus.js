exports.isAuthenticated = function(req, res, next) {
  if(req.isAuthenticated()) return next(); //si esta autenticado pasa a la funcion
  res.status(401); //retorno error 404???
  res.send('Requiere autenticacion.');
  return;
};
exports.isAuthorized = function(req, res, next) {
  //console.log(req.user.tipo);
  if(req.isAuthenticated()) {
    if(req.user.tipo == 'ADMIN') return next();
    else {
      res.status(401);
      res.send('Requiere ADMIN.');
    }
  } else {
    res.status(401);
    res.send('Requiere autenticacion.');
    return;
  }
};
