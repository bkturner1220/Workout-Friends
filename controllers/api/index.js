const router = require('express').Router();
const userRoutes = require('./userRoutes');
const successRoutes = require('./successRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/success', successRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
