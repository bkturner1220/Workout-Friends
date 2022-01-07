const router = require('express').Router();
const userRoutes = require('./userRoutes');
const winRoutes = require('./winRoutes');
const routineRoutes = require('./routineRoutes');
const blogRoutes = require('./blogRoutes');

// const taskRoutes = require('./taskRoutes');

router.use('/users', userRoutes);
router.use('/win', winRoutes);
router.use('/routine', routineRoutes);
router.use('/blogs', blogRoutes);

// router.use('/task', taskRoutes);


module.exports = router;
