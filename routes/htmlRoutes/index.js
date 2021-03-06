// required node modules
const path = require('path');
const express = require('express');
const router = require('express').Router();

// use css and js files in /public
router.use(express.static('public'));

// serve landing page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// serve "add catch" page
router.get('/new-catch', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/add.html'));
});

// serve "view logged catches" page
router.get('/view-caught-fish', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/view.html'));
});

// export code
module.exports = router;