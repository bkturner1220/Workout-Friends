const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Daily extends Model { }

Daily.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    healthplan_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
          model: 'healthplan',
          key: 'id',
        },     
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,    
    },
    taskA: {
      type: DataTypes.STRING,
      allowNull: false,    
    },
    taskB: {
      type: DataTypes.STRING,
      allowNull: false,    
    },
    taskC: {
      type: DataTypes.STRING,
      allowNull: false,    
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'daily',
  }
);

module.exports = Daily;
