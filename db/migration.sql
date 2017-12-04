
--connect to the proper database
\c project_two;

--(CAT TABLE)
--if it already exists, drop table cats
DROP TABLE if EXISTS cats;

-- create table 1 w/ appropriate columns
CREATE TABLE cats (
id              SERIAL PRIMARY KEY,
cat_name        VARCHAR(255),
cat_description TEXT,
cat_breed       VARCHAR(255)
);

CREATE INDEX ON cats (cat_breed);


--(CAT_MOVIE TABLE)
DROP TABLE if EXISTS cat_movie;
CREATE TABLE cat_movie (
movie_id        SERIAL PRIMARY KEY,
movie_title     VARCHAR (255),
cat_name_id     INTEGER REFERENCES cats(id)
);

CREATE INDEX ON cat_movie (movie_title);
