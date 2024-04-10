const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Period extends Model {}

Period.init(
  {
    periodKey: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    periodDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'periodstatus',
        key: 'statusKey',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'period',
  }
);

module.exports = Period;