const router = require('express').Router();
const { FishCaught } = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    FishCaught.findAll()
    .then(dbFishData => {
        const fish = dbFishData.map(fish => fish.get({ plain: true }));
        console.log(fish);
        res.render('homepage', { fish });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;