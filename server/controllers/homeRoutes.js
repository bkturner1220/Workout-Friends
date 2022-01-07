const router = require('express').Router();
const { User, Win, Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const winData = await Win.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const wins = winData.map((win) => win.get({ plain: true }));
    console.log(wins);
    console.log("hello world");

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      wins, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log("CAN YOU SEE ME");
    console.log(err);
    res.status(500).json(err);
  }
});

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

router.get('/win/:id', async (req, res) => {
  try {
    const winData = await Win.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const win = winData.get({ plain: true });
    console.log(win)

    res.render('win', {
      ...win,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/account', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Win }],
    });

    const user = userData.get({ plain: true });

    res.render('account', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/account');
    return;
  }

  res.render('login');
});

router.get('/register', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/account');
    return;
  }

  res.render('register');
});


module.exports = router;
