//build full functionality for CRUD model here

//CRUD methods are in SQL language so that they can talk to the database (which is why we require the config in the model)
//each function returns a promise (which is why we require the pg promise in model)
const pgp       = require('pg-promise') ();
const dbConfig  = require('../config/dbConfig');

//execute pgp with our db config so that a connection is made.  We pass in the config as an argument in pg promise so that it knows where to return the promise from.
const db        = pgp(dbConfig);

//export the collection of middleware functions
module.exports = {

  //function 'findAll' to grab all of the cats from the database
  findAll(){
    return db.many(`
      SELECT *
      FROM cats
      ORDER BY id
      `);
  },

  //function 'findOne' to select one cat, grabbing info from cat table and joining on cat_movies foreign key.
  findOne(id){
    // return db.one(`
    //   SELECT cats.id, cats.cat_name, cats.cat_breed, cats.cat_description, cat_movie.movie
    //   FROM cats
    //   INNER JOIN cat_movie on cats.id=cat_movie.cat_name_id
    //   WHERE id = $1
    //   `, id);

    return db.one(`
      SELECT *
      FROM cats
      WHERE id = $1;
      `, id);
  },


  //function 'save' to add a cat to the collection
  save(cat){
    return db.one(`
      INSERT INTO cats (cat_name, cat_description, cat_breed)
      VALUES ($/cat_name/, $/cat_description/, $/cat_breed/)
      RETURNING *
      `, cat);
  },

  update(cat){
    return db.one(`
      UPDATE cats
      SET
        cat_name = $/cat_name/,
        cat_description = $/cat_description/,
        cat_breed = $/cat_breed/
      WHERE id = $/id/
      RETURNING *
      `, cat);
  },

  delete(id){
    return db.none(`
      DELETE
      FROM cats
      WHERE id = $1
    `, id);
  }
}

