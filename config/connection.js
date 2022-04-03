// This sets up the connection to the database.
const Sequelize = require('sequelize');

// Set up dotenv to protect local environment login
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;