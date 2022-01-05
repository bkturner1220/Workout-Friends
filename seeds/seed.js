const sequelize = require('../config/connection');
const { User, Healthplan, Routine } = require('../models');

const userData = require('./userData.json');
const healthplanData = require('./healthplanData.json');
const maintainData = require('./maintainData.json');
const gainmuscleData = require('./gainmuscleData.json');
const weightlossData = require('./weightlossData.json');
// const successData = require('./successData.json');
// const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const healthplan of healthplanData) {
    const newHealthplan = await Healthplan.create({
      ...healthplan
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const users = await User.bulkCreate(userData, {
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

  process.exit(0);
};

seedDatabase();
