const sequelize = require('../config/connection');
const { User, Success, Comment, Healthplan } = require('../models');

const userData = require('./userData.json');
const successData = require('./successData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const success of successData) {
    await Success.create({
      ...success,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      article_id:Math.floor(Math.random() * articleData.length + 1),
    });
  }

  process.exit(0);
};

seedDatabase();
