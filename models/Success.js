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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    completed: {
      type: DataTypes.STRING(500),
      allowNull: false,
      references: {
        model: 'Daily',
        key: 'id',
        through: {
          model: 'tasklist',
          key: 'id'
        },
      },
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      user_id: {
        type: DataTypes.STRING,
        references: {
          model: 'user',
          key: 'id',
        },
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
