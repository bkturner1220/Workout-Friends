const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const winRoutes = require('./api/winRoutes');


router.use('/win', winRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
