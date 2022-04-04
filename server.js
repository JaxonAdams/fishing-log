// required node modules
const express = require('express');
const sequelize = require('./config/connection');

// code for api and html routes
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// set up server
const app = express();

// middleware
// parse incoming data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
// use proper routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// define PORT
const PORT = process.env.PORT || 3001;

// turn on database and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`);
    });
});