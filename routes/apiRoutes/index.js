const router = require('express').Router();
const balanceRoutes = require('./balanceRoutes');

router.use('/balance', balanceRoutes);

module.exports = router;
