
--connect to the proper database
\c project_two;

--(CAT TABLE)
--if it already exists, drop table cats
DROP TABLE if EXISTS cats_movies_xref;
DROP TABLE if EXISTS cats;
DROP TABLE if EXISTS movies;

-- create table 1 w/ appropriate columns
CREATE TABLE cats (
  id              SERIAL PRIMARY KEY,
  cat_name        VARCHAR(255),
  cat_description TEXT,
  cat_breed       VARCHAR(255)
);

CREATE INDEX ON cats (cat_breed);
CREATE INDEX ON cats (cat_name);

--(CAT_MOVIE TABLE)
CREATE TABLE movies (
  movie_id        SERIAL PRIMARY KEY,
  movie_title     VARCHAR (255)
);

CREATE INDEX ON movies (movie_title);

CREATE TABLE cats_movies_xref (
  cat_id INTEGER NOT NULL REFERENCES cats,
  movie_id INTEGER NOT NULL REFERENCES movies,
  PRIMARY KEY(cat_id, movie_id)
);

CREATE INDEX ON cats_movies_xref (movie_id);
