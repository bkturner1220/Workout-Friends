const User = require('./User');
const Healthplan = require('./Healthplan');
const Routine = require('./Routine');
// const Success = require('./Success');
// const Comment = require('./Comment');

User.belongsTo(Healthplan, {
  foreignKey: 'healthplan_id'
});

Healthplan.hasMany(User);

Routine.belongsTo(Healthplan, {
  foreignKey: 'healthplan_id'
});

// Healthplan.hasMany(Routine);

// User.hasMany(Success, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Success.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Success.hasMany(Comment);

// Comment.belongsTo(Success, {
//   foreignKey: 'success_id'
// });

module.exports = { User, Healthplan, Routine };
