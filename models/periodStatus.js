const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class PeriodStatus extends Model {}

PeriodStatus.init(
  {
    statusKey: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    periodStatus: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'periodstatus',
  }
);

module.exports = PeriodStatus;
