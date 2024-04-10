const router = require('express').Router();
const { viewAllBalances, viewPeriodBalance, createPeriodBalances } = require('../../../controllers/balanceController');

router.route('/').get(viewAllBalances);
router.route('/:periodKey').get(viewPeriodBalance).post(createPeriodBalances);

module.exports = router;
