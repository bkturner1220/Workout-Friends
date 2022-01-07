const User = require('./User');
const Healthplan = require('./Healthplan');
const Routine = require('./Routine');
const Task = require('./Task');
const Win = require('./Win');
const Blog = require('./Blog')
// const Comment = require('./Comment');

User.belongsTo(Healthplan, {
  foreignKey: 'healthplan_id'
});

Healthplan.hasMany(User);

Routine.belongsTo(Healthplan, {
  foreignKey: 'healthplan_id'
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Routine, { through: Win });
Routine.belongsToMany(User, { through: Win });
User.hasMany(Win);
Win.belongsTo(User);
Routine.hasMany(Win);
Win.belongsTo(Routine);


module.exports = { User, Healthplan, Routine, Task, Win, Blog };
