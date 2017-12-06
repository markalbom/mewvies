# Project_Two
GA WDI, Project Two - Cat Film DB 

Approach Taken:
I relied on the Hamilton Quotes Refactor lab to reinforce the CRUD application foundations, and this application reflects that.  I thought that being able to render / read all the entries in the DB was a suitable starting point, and build from there.  The next problem to tackle was viewing one entry.  I found that small syntax errors (cat vs cats) in my view controller and views led to big problems.  After debugging these syntax errors, I was able to read a single entry.  Once the read functionality was complete, I moved on to editing an existing cat.  A problem I encountered was that the object was being captured, but not rendered in the response.  This was due to not specifiying the id to append the changes.  Declaring a new variable and assigning the ammended quotes value to it solved many problems for me.  After that, I moved to the "create" aspect.  The rendering path in the view controller was incorrect, and .  Finally, the delete aspect worked without errors.  The primary purpose of the project / exercise was to create a working CRUD application, which was sucessful.  The major hurdle I encountered was refactoring the entire application to create a new (JOIN) table that would be the table that joins the cats and movies information. Having removed the foreign key from the movies table (which referenced cats), I am now able to access all pertinent information requested via the join table.  Now that that is accessible, I have a foundation with which to execute a 3rd party API call.  I hope to incorporate this element, along with an improved visual design, in a future update.  

Technologies Used:
HTML / EJS
Node / Express
SQL / PG-Promise
CSS
Method-Override
Morgan
Nodemon
Debugging

Code Snippet:
Example of Inner Join of two tables (cats and movies) to find all movies:

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

User Stories:
User should reach the landing page, see a welcome message, and a button to "enter" and see all the cats, which takes them to the next "page".

On this page is a list of all the cats available to view.  A user now has a broad overview of each cat (by name) and a link on each one that when clicked, allows the user to see a more in-depth description of that cat.  Also on this page is the ability to add their own cat if they don't see their own in the overview.

Once clicking on the indiviudal cat, a user can see the cat's name, its breed, a brief description, and three options - the ability to edit the particular cat, the ability to delete the cat, and an option to return to the main menu (the overview of all the cats).  

Features:

User can see (READ) all the cats in the collection, and then by clicking on its respective link, see a cat's individual information, including name, breed, and which movie(s) it has appeared in.  Users can also add a cat to the collection (CREATE), edit an exisiting cat (UPDATE), and delete an existing cat if it displeases them (DELETE).  Full CRUD functionality is working.    

References:
External API: none

Author: Mark Albom 

