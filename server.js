// required node modules
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');

// code for api and html routes
const routes = require('./controllers');

// set up templating engine
const hbs = exphbs.create({});

// set up server
const app = express();

// use templating engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware
// parse incoming data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
// provide static files
app.use(express.static(path.join(__dirname, 'public')));
// provide favicon
app.use(favicon(path.join(__dirname + '/public/assets/images/favicon.png')));
// use proper routes
app.use(routes);

// define PORT
const PORT = process.env.PORT || 3001;

// turn on database and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`);
    });
});