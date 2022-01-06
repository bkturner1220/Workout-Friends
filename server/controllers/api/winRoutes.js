const router = require('express').Router();
const { Win } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.post('/Task/:id', withAuth, async (req, res) => {
  try {
    const newWin = await Win.create({
      ...req.body,
      task_id: req.session.task_id,
    });

    res.status(200).json(newWin);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
