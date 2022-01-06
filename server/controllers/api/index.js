const router = require('express').Router();
const userRoutes = require('./userRoutes');
const winRoutes = require('./winRoutes');
const routineRoutes = require('./routineRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/users', userRoutes);
router.use('/win', winRoutes);
router.use('/routine', routineRoutes);
router.use('/task', taskRoutes);


module.exports = router;
