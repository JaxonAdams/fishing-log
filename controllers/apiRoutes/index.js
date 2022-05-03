// required node modules
const router = require('express').Router();
const FishCaughtRoutes = require('./fish-caught-routes');
const UserRoutes = require('./user-routes');

router.use('/fish-caught', FishCaughtRoutes);
router.use('/users', UserRoutes);

module.exports = router;