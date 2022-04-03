const router = require('express').Router();
const { FishCaught } = require('../../models');

// GET all fish caught
router.get('/', (req, res) => {
    FishCaught.findAll({
        attributes: ['id', 'date_caught', 'angler_name', 'location', 'lure']
    })
    .then(dbFishData => res.json(dbFishData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;