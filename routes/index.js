const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const seedRoutes = require('./seedRoutes');

router.use('/api', apiRoutes);
router.use('/seed', seedRoutes);

module.exports = router;