const User = require('./User');
const Success = require('./Success');
const Comment = require('./Comment');
const Healthplan = require('./Healthplan');
const Daily = require('./Daily');

User.hasOne(Healthplan, {
  foreignKey: 'healthplan_id'
});

Healthplan.hasMany(User, {
  foreignKey: 'user_id'
});

Daily.belongsTo(Healthplan, {
  foreignKey: 'healthplan_id'
});

Healthplan.hasMany(Daily, {
});

User.hasMany(Success, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Success.belongsTo(User, {
  foreignKey: 'user_id'
});

Success.hasMany(Comment);

Comment.belongsTo(Success, {
  foreignKey: 'success_id'
});

module.exports = { User, Success, Comment, Healthplan, Daily };
