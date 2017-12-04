//import your required dependency (express)
const express         = require('express');

//import path for controllers (main controller - cats - and views controller) so that routes can then access them
const catsController  = require('../controllers/catsController');
const views           = require('../controllers/viewController');

//create var that can now use the router method in the express library
const catsRouter      = express.Router();


catsRouter.route('/new')
.get(catsController.makeBlankCat, views.showAddForm, views.show404);

catsRouter.route('/:id/edit')
.get(catsController.herdOneCat, views.showEditForm, views.show404);

catsRouter.route('/:id')
.get(catsController.herdOneCat, views.showOneCat, views.show404)
.put(catsController.updateCat, views.handleUpdate, views.show404)
.delete(catsController.deleteCat, views.handleDelete, views.show404);

//build out routes from most specific route (at top) to least specific (at bottom)
catsRouter.route('/')
.get(catsController.herdAllCats, views.showAllCats, views.show404)
.post(catsController.makeNewCat, views.handleCreate, views.show404);

//make sure to export your router at the very bottom!  It needs to be exported so that every other station in the MVC where it is called can access it.
module.exports = catsRouter;
