const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Healthplan extends Model { }

Healthplan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'healthplan',
  }
);

module.exports = Healthplan;
