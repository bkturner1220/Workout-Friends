const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Success extends Model { }

Success.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    routine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'routine',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'success',
  }
);

module.exports = Success;
