//import model so that it can be accessed by the controller
const catsDB = require('../models/catsDB');

//wrap all controller middleware in an export object so it can be accessed by the routes
module.exports = {
  //function "herd all cats" to execute the findAll function in the controller, then return that data (cats).  store that data in res.locals.cats, run the next handler in the line.  Display an error if one is encountered.
  herdAllCats(req, res, next) {
    catsDB.findAll()
    .then((cats) => {
      res.locals.cats = cats;
      next();
    })
    .catch(err => next(err));
  },

  herdOneCat(req, res, next) {
    catsDB.findOne(req.params.id)
    .then((cat) => {
      res.locals.cat = cat;
      next();
    })
    .catch(err => next(err));
    },


  // //req.body is a method of the body parser
  makeNewCat(req, res, next) {
    catsDB.save(req.body)
    .then((cat) => {
      console.log(cat, 'posted');
      res.locals.cat = cat;
      next();
    })
    .catch(err => next(err));
  },


  // //once you have clicked on 'make new cat', run the function 'make blank cat' to create a form to create the new cat. set it in res.locals to render in the /new route
  makeBlankCat(req, res, next) {
    const newCat = {
      id:                  null,
      cat_name:            null,
      cat_description:     null,
      cat_breed:           null,
    };
    res.locals.cat = newCat;
    next();
  },

  updateCat(req, res, next) {
    req.body.id = req.params.id;
    console.log(req.body, 'controller update')

    catsDB.update(req.body)
    .then((cat) => {
      res.locals.cat = cat;
    next();
    })
    .catch(err => next(err));
  },

  deleteCat(req, res, next) {
    catsDB.delete(req.params.id)
    .then(() => next())
    .catch(err => next(err));
  }
}

