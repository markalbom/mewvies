//build full functionality for CRUD model here

//CRUD methods are in SQL language so that they can talk to the database (which is why we require the config in the model)
//each function returns a promise (which is why we require the pg promise in model)
const pgp       = require('pg-promise')({
  query: (e) => console.log(e.query),
});
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
  //function 'findAllMovies' to grab all the movies (so that you can search by movie - not implemented in the routes/ views (yet) - time issue in determining implementation and views, but syntax is correct).
  findAllMovies(id){
    console.log(id);
    return db.many(`
      SELECT movies.movie_title
      FROM cats_movies_xref
      INNER JOIN cats ON cats.id=cats_movies_xref.cat_id
      INNER JOIN movies ON movies.movie_id=cats_movies_xref.movie_id
      WHERE id = $1
      `, id);
  },

  //function 'findOne' to select one cat, grabbing pertinent info from cat table.
  findOne(catID){
    return db.one(`
      SELECT cats.id, cats.cat_name, cats.cat_description, cats.cat_breed
      FROM cats
      WHERE cats.id = $1
      `, catID);
  },


// FROM cats_movies_xref
//       INNER JOIN cats ON cats.id=cats_movies_xref.cat_id
//       INNER JOIN movies ON movies.movie_id=cats_movies_xref.movie_id
// select c.*, m.*
// from cats c
// left join cats_movies_xref x on c.id = x.cat_id
// left join movies m on m.movie_id = x.movie_id
// where c.id=11



// return db.one(`
// SELECT cats.cat_name, cats.cat_breed, cats.cat_description, movie.movie_title
// FROM cats c
// left join cats_movies_xref x on c.id = x.cat_id
// left join movies m on m.movie_id = x.movie_id
// WHERE c.id = $1
// `, catID);
// },

  //   return db.one(`
  //     SELECT *
  //     FROM cats
  //     WHERE id = $1;
  //     `, id);
  // },


  //function 'save' to add a cat to the collection.  PG Promise transactions to chain creations (see: https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example#transactions)
  save(cat) {
    return db.tx(t => {
      return t.batch([

        /* insert a new entry into cats, grab the cat ID */
        t.one(`
          INSERT INTO cats (cat_name, cat_description, cat_breed)
          VALUES ($/cat_name/, $/cat_description/, $/cat_breed/)
          RETURNING id
        `, cat),

        /* insert a new entry into movies, grab the movie id */
        t.one(`
          INSERT INTO movies (movie_title)
          VALUES ($1)
          RETURNING movie_id
        `, cat.movie_name),

      ])
    })
        /* then insert those two id values into the cats_movies_xref*/
      .then(([catID, movieID]) => {
        console.log(catID, movieID);
        // let newCatID = catID.id;
        // let newMovieID = movieID.movie_id;
        return db.one(`
          INSERT INTO cats_movies_xref (cat_id, movie_id)
          VALUES ($1, $2)
          RETURNING cat_id
        `, [catID.id, movieID.movie_id])
      })
      /* then insert those two id values into their respective tables (cats) and (movies)*/
      .then(joinCat => {
        console.log(joinCat.cat_id);
        return db.one(`
          SELECT cats.id, cats.cat_name, cats.cat_breed, cats.cat_description, movies.movie_title
          FROM cats_movies_xref
          INNER JOIN cats ON cats.id=cats_movies_xref.cat_id
          INNER JOIN movies ON movies.movie_id=cats_movies_xref.movie_id
          WHERE cats.id = $1
        `, joinCat.cat_id)
      })
  },

  update(cat){
    return db.one(`
      UPDATE cats
      SET
        cat_name        = $/cat_name/,
        cat_description = $/cat_description/,
        cat_breed       = $/cat_breed/
        movie_name.     = $/movie_name/,
      WHERE id          = $/id/
      RETURNING *
      `, cat);
  },

//function 'delete' to delete a cat.  Deletes the cat from the cats_movies_xref table and the cat from the cats table.  To not do it from both would result in errors, since it would exist in only one table.
  delete(id){
    return db.none(`
      DELETE
      FROM cats_movies_xref
      WHERE cat_id = $1;
      DELETE
      FROM cats
      WHERE id = $1
    `, id);
  }
}

