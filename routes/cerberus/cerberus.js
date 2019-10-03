
/**
 * [isAuthenticated; funcion que valida si esta logeado]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.isAuthenticated = function(req, res, next) {
  if(req.isAuthenticated()) return next(); //si esta autenticado pasa a la funcion
  res.status(401); //retorno error 404???
  res.send('Requiere autenticacion.');
  return;
};

/**
 * [isAuthorized: funcion que valida si es un usuario ADMIN]
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.isAuthorized = function(req, res, next) {

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
