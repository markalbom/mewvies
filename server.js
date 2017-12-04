//Required resources always go first
const express         = require('express');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const path            = require('path');
const ejs             = require('ejs');

//import routes to server
const catsRouter      = require('./routes/cats_routes');

//connect port to server
const PORT            = process.env.PORT || 3000;

//import express library into the server
const app             = express();

//import logger and body parser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

//configure views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set up static file
app.use('/static', express.static(path.join(__dirname, 'public')));

//set up method override
app.use(methodOverride('_method'));

//establish routes - use the route 'cat routes', execute the catsRouter method
app.use('/cats_routes', catsRouter);

//on index (home route), display the following:
app.get('/', (req, res) => {
  res.render('index', {
    message:       'Meow',
    documentTitle: 'Famous Film Felines',
    subTitle:      'Hello and Welcome to Famous Cats in film - the purrfect place to find and add your favorite movie cats.'
  });
});

//set up port listener at the bottom here
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});

