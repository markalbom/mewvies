--connect to the proper database
\c project_two;

INSERT INTO cats (cat_name, cat_description, cat_breed) VALUES
(
  'Pywacket',
  'Pywacket is the familiar spirit of modern-day witch Gillian Holroyd (portrayed by Kim Novak).  As a familiar, he is a supernatural entity that assists in executing her spells.',
  'Siamese'
),
(
  'Baby',
  'Baby is a Brazillian tame leopard given to Susan Vance (Katherine Hepburn) by her brother.  The leopard is actually native to Africa and Asia but not South America.  It plays a major role throughout the course of the film.',
  'Leopard'
),
(
  'Jinx',
  'Jin is a cat that can use a human toilet',
  'Himalayan'
),
(
  'Keanu',
  'Keanu is a cat that the movie is centered around',
  'Tabby'
),
(
  'Cat',
  'Holly Golightlys cat shows up three times in the film',
  'Tabby'
),
(
  'Orion',
  'Orion carries the universe in a collar around his neck',
  'Tabby'
),
(
  'Annas Cat',
  'Annas cat only liked Harry Lime.  It seemed to tolerate Holly Martins',
  'Unknown'
),
(
  'Stray Cat',
  'Patrick Bateman almost fed him into an ATM',
  'Tabby'
),
(
  'Bloefelds Cat',
  'Bloefelds cat appears in 6 James Bond films',
  'Angora'
),
(
  'Mr. Bigglesworth',
  'Mr. Bigglesworth is the cat of Dr. Evil',
  'Angora'
);


INSERT INTO movies (movie_title) VALUES
('Bell, Book, and Candle'),
('Bringing up Baby'),
('Meet the Parents'),
('Meet the Fockers'),
('Little Fockers'),
('Keanu'),
('Breakfast at Tiffanys'),
('Men in Black'),
('The Third Man'),
('American Pyscho'),
('From Russia with Love'),
('Thunderball'),
('You Only Live Twice'),
('Diamonds are Forever'),
('For Your Eyes Only'),
('Spectre'),
('Austin Powers: International Man of Mystery');

INSERT INTO cats_movies_xref (movie_id, cat_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 3),
(5, 3),
(6, 4),
(7, 5),
(8, 6),
(9, 7),
(10, 8),
(11, 9),
(12, 9),
(13, 9),
(14, 9),
(15, 9),
(16, 9),
(17, 10);
