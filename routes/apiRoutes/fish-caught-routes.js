const router = require('express').Router();
const { FishCaught } = require('../../models');

// GET all fish caught /api/fish-caught
router.get('/', (req, res) => {
    FishCaught.findAll({
        attributes: ['id', 'date_caught', 'angler_name', 'fish', 'location', 'lure'],
        order: [['id', 'DESC']]
    })
    .then(dbFishData => res.json(dbFishData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET a specific catch /api/fish-caught/:id
router.get('/:id', (req, res) => {
    FishCaught.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbFishData => {
        if (!dbFishData) {
            res.status(404).json({ message: 'We could not find that catch.' });
            return;
        }
        res.json(dbFishData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST a new catch /api/fish-caught
router.post('/', (req, res) => {
    FishCaught.create({
        date_caught: req.body.date_caught,
        angler_name: req.body.angler_name,
        location: req.body.location,
        lure: req.body.lure,
        fish: req.body.fish
    })
    .then(dbFishData => res.json(dbFishData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
});

module.exports = router;