const router = require('express').Router();

const apiRoutes = require('./api');
const dashRoutes = require('./DashRoutes');

router.use('/api', apiRoutes);
router.use('/', dashRoutes);


module.exports = router;
