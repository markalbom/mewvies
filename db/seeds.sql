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

INSERT INTO cat_movie (movie_title, cat_name_id) VALUES
('Bell, Book, and Candle', 1),
('Bringing up Baby', 2),
('Meet the Parents', 3),
('Meet the Fockers', 3),
('Little Fockers', 3),
('Keanu', 4),
('Breakfast at Tiffanys', 5),
('Men in Black', 6),
('The Third Man', 7),
('American Pyscho', 8),
('From Russia with Love', 9),
('Thunderball', 9),
('You Only Live Twice', 9),
('Diamonds are Forever', 9),
('For Your Eyes Only', 9),
('Spectre', 9),
('Austin Powers: International Man of Mystery', 10);
