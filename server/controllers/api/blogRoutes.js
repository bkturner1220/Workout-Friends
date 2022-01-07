const router = require('express').Router();
const { Blog } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const blogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const blogs = blogData.map((blog) => blog.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('/blogs', { 
        blogs, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      console.log(err)
      console.log("CAN YOU SEE ME");
  
      res.status(500).json(err);
    }
  });
  
  router.get('/blog/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const blog = blogData.get({ plain: true });
  
      res.render('blog', {
        ...blog,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      console.log(err)
      console.log("CAN YOU SEE ME");
  
      res.status(500).json(err);
      con
    }
  });


module.exports = router;