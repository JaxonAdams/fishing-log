const router = require('express').Router();
const { FishCaught } = require('../../models');
const { filterByQuery } = require('../../lib/catchFunctions');

// GET all fish caught /api/fish-caught
router.get('/', (req, res) => {
    // handle query params
    let filter = {};
    filter.angler_name = req.query.angler_name;
    filter.location = req.query.location;
    filter.lure = req.query.lure;
    
    // THIS IS VERY MESSY BUT IT WORKS
    // I PROMISE I WILL REFACTOR SOON

    if (req.query.angler_name && req.query.location && req.query.lure) {
        FishCaught.findAll({
            where: {
                angler_name: filter.angler_name,
                location: filter.location,
                lure: filter.lure
            }
        })
        .then(dbFishData => {
            res.json(dbFishData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } else if (req.query.angler_name && req.query.lure) {
        FishCaught.findAll({
            where: {
                angler_name: filter.angler_name,
                lure: filter.lure
            }
        })
        .then(dbFishData => {
            res.json(dbFishData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } else if (req.query.location && req.query.lure) {
        FishCaught.findAll({
            where: {
                location: filter.location,
                lure: filter.lure
            }
        })
        .then(dbFishData => {
            res.json(dbFishData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } else if (req.query.angler_name && req.query.location) {
        FishCaught.findAll({
            where: {
                angler_name: filter.angler_name,
                location: filter.location
            }
        })
        .then(dbFishData => {
            res.json(dbFishData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } else if (req.query.angler_name) {
        FishCaught.findAll({
            where: {
                angler_name: filter.angler_name
            }
        })
        .then(dbFishData => {
            res.json(dbFishData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } else if (req.query.location) {
        FishCaught.findAll({
            where: {
                location: filter.location
            }
        })
        .then(dbFishData => {
            res.json(dbFishData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } else if (req.query.lure) {
        FishCaught.findAll({
            where: {
                lure: filter.lure
            }
        })
        .then(dbFishData => {
            res.json(dbFishData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    } else {
        FishCaught.findAll()
        .then(dbFishData => {
            res.json(dbFishData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    }
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