//export the view controller so that it can be used in the routes
module.exports = {
   show404(err, req, res, next) {
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

  showOneCat(req, res) {
    res.render('cats/cats-single', {
      cat: res.locals.cat
    })
  },

  showAddForm(req, res) {
    res.render('cats/cats-add', { data: {}});
  },

  showEditForm(req, res) {
    res.render('cats/cats-edit', {
      cat: res.locals.cat,
    });
  },

  handleCreate(req, res) {
    res.redirect('/cats');
  },

  handleUpdate(req, res) {
    res.redirect(`/cats/${req.params.id}`);
  },

  handleDelete(req, res) {
    res.redirect('/cats');
  }
}
