//export the view controller so that it can be used in the routes
module.exports = {
   show404(err, req, res, next) {
    console.log({err});
    res.sendStatus(404);
  },

  show406(err, req, res, next) {
    res.sendStatus(406);
  },

  showAllCats(req, res) {
    console.log(res.locals.cats)
    res.render('cats/cats-index', {
    cats: res.locals.cats
    })
  },

//need to render both the cat and its movie(s) in this view (hence why both are included)
  showOneCat(req, res) {
    res.render('cats/cats-single', {
      cat: res.locals.cat,
      movies: res.locals.movies
    })
  },

  showAddForm(req, res) {
    res.render('cats/cats-add', { data: {}});
  },

//like the showOneCat view, this needs to render both the cat and the movie so that they both can be edited.
  showEditForm(req, res) {
    res.render('cats/cats-edit', {
      cat: res.locals.cat,
      movies: res.locals.movies
    });
  },

  handleCreate(req, res) {
    res.redirect(`/cats_routes/${res.locals.cat.id}`);
  },

  handleUpdate(req, res) {
    res.redirect(`/cats_routes/${req.params.id}`);
  },

  handleDelete(req, res) {
    res.redirect('/cats_routes');
  }
}
