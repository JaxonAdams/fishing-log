// required node modules
const router = require('express').Router();
const { filterByQuery, createCatch, validateCatch } = require('../../lib/catchFunctions');
const { fish } = require('../../db/fishingInfo.json');
const FishCaughtRoutes = require('./fish-caught-routes');

// get data when page loads or filter request made
router.get('/fish', (req, res) => {
    let results = fish;

    if (req.query) {
        results = filterByQuery(req.query, results);
    }

    res.json(results);
});

// add new catch data to the database
router.post('/fish', (req, res) => {
    req.body.id = Math.floor(Math.random() * 1000000000);

    if (!validateCatch(req.body)) {
        res.status(400).send('The catch data is not properly formatted.');
    } else {
        const fishInfo = createCatch(req.body, fish);
        res.json(fishInfo);
    }
});

router.use('/fish-caught', FishCaughtRoutes);

module.exports = router;