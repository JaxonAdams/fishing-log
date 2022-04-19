// required node modules
const router = require('express').Router();
const FishCaughtRoutes = require('./fish-caught-routes');

router.use('/fish-caught', FishCaughtRoutes);

module.exports = router;