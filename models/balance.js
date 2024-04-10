const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Balance extends Model {}

Balance.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    accountingPeriod: {
      type: DataTypes.STRING,
      references: {
        model: 'period',
        key: 'periodKey',
      },
    },
    balancePeriod: {
      type: DataTypes.INTEGER,
    },
    balanceYear: {
      type: DataTypes.INTEGER,
    },
    beginningBalance: {
      type: DataTypes.FLOAT(10, 2),
      defaultValue: 0.0,
    },
    periodActivity: {
      type: DataTypes.FLOAT(10, 2),
      defaultValue: 0.0,
    },
    endingBalance: {
      type: DataTypes.VIRTUAL,
      get() {
        return Math.round((this.beginningBalance + this.periodActivity) * 100) / 100;
      },
    },
  },
  {
    sequelize,
    indexes: [
      {
        unique: true,
        fields: ['balancePeriod', 'balanceYear'],
      },
    ],
    freezeTableName: true,
    modelName: 'balance',
  }
);

module.exports = Balance;
