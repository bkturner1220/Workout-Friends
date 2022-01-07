const sequelize = require('../config/connection');
const { User, Healthplan, Routine, Task, Win, Blog } = require('../models');

const userData = require('./userData.json');
const healthplanData = require('./healthplanData.json');
const maintainData = require('./maintainData.json');
const gainmuscleData = require('./gainmuscleData.json');
const weightlossData = require('./weightlossData.json');
const taskData = require('./taskData.json');
const winData = require('./winData.json');
const blogData = require('./blogData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const healthplan of healthplanData) {
    const newHealthplan = await Healthplan.create({
      ...healthplan
    });
  }

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })

  const tasks = await Task.bulkCreate(taskData, {
    individualHooks: true,
    returning: true,
  })
  

  for (const routine of maintainData) {
   const newRoutine = await Routine.create({
      ...routine,
    });
  }

  for (const routine of gainmuscleData) {
    const newRoutine = await Routine.create({
      ...routine,
    });
  }

  for (const routine of weightlossData) {
    const newRoutine = await Routine.create({
      ...routine,
    });
  }

  for (const win of winData) {
    const newWin = await Win.create({
      ...win,
    });
  }

  for (const blog of blogData) {
    const newBlog = await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
