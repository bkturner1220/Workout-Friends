const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const successData = await Success.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const success = successData.map((success) => success.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        success, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;