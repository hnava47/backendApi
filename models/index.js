const Balance = require('./balance');
const Period = require('./period');
const PeriodStatus = require('./periodStatus');

Period.hasOne(Balance, {
  foreignKey: 'accountingPeriod',
  onDelete: 'CASCADE',
});

Balance.belongsTo(Period, {
  foreignKey: 'accountingPeriod',
});

PeriodStatus.hasMany(Period, {
  foreignKey: 'status',
  onDelete: 'CASCADE',
});

Period.belongsTo(PeriodStatus, {
  foreignKey: 'status',
});

module.exports = {
  Balance,
  Period,
  PeriodStatus,
};
