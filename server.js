// required node modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// code for api and html routes
const htmlRoutes = require('./routes/htmlRoutes');

// set up server
const app = express();

// middleware
// parse incoming data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
// use proper routes
app.use('/', htmlRoutes);

// define PORT
const PORT = process.env.PORT || 3001;

// start server and listen for requests
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});