const router = require('express').Router();
const { FishCaught } = require('../models');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    FishCaught.findAll({
        order: [['date_caught', 'DESC']]
    })
    .then(dbFishData => {
        const fish = dbFishData.map(fish => fish.get({ plain: true }));
        console.log(fish);
        res.render('homepage', { fish, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;