const { Balance } = require('../models');

module.exports = {
  viewAllBalances: async (req, res) => {
    try {
      const allBalance = await Balance.findAll({
        where: req.query.period ? { accountingPeriod: req.query.period } : null,
      });

      res.json(allBalance);
    } catch (error) {
      res.json(error);
    }
  },
  viewPeriodBalance: async (req, res) => {
    try {
      const periodBalance = await Balance.findOne({
        where: { accountingPeriod: req.params.periodKey },
      });

      res.json(periodBalance);
    } catch (error) {
      res.json(error);
    }
  },
  createPeriodBalances: async (req, res) => {
    const { currentPeriod, currentYear, prevPeriod, prevYear } = req.body;

    try {
      const prevBalance = await Balance.findOne({
        where: {
          balancePeriod: prevPeriod,
          balanceYear: prevYear,
        },
      });

      const newBalance = await Balance.create({
        accountingPeriod: req.params.periodKey,
        balancePeriod: currentPeriod,
        balanceYear: currentYear,
        beginningBalance: prevBalance.endingBalance,
      });

      res.json(newBalance);
    } catch (error) {
      res.json(error);
    }
  },
};
