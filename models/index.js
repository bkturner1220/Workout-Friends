const User = require('./User');
const Healthplan = require('./Healthplan');
const Routine = require('./Routine');
const Task = require('./Task');
// const Success = require('./Success');
// const Comment = require('./Comment');

User.belongsTo(Healthplan, {
  foreignKey: 'healthplan_id'
});

Healthplan.hasMany(User);

Routine.belongsTo(Healthplan, {
  foreignKey: 'healthplan_id'
});

User.belongsToMany(Routine, { through: 'user_completed' });
Routine.belongsToMany(User, { through: 'user_completed' });

// Success.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Success.hasMany(Comment);

// Comment.belongsTo(Success, {
//   foreignKey: 'success_id'
// });

module.exports = { User, Healthplan, Routine, Task };
