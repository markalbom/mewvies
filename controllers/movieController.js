const catsDB = require('../models/catsDB');

module.exports = {

  grabAllMovies(req, res, next){
    console.log('hitting movie controller');
    catsDB.findAllMovies(req.params.id)
    .then((movies) => {
      res.locals.movies = movies;
      next();
    })
    .catch(err => next(err));
    }

}
