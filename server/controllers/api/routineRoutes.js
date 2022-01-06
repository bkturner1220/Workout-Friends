const router = require('express').Router();
const { Routine, Task } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const newRoutine = await Routine.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRoutine);
  } catch (err) {
    res.status(400).json(err);
  }
});






module.exports = router;