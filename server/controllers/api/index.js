const router = require('express').Router();
const userRoutes = require('./userRoutes');
const successRoutes = require('./successRoutes');
const routineRoutes = require('./routineRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/users', userRoutes);
router.use('/success', successRoutes);
router.use('/routine', routineRoutes);
router.use('/task', taskRoutes);


module.exports = router;
