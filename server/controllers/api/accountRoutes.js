const router = require('express').Router();
// const { Routine, Task } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
res.render("account");
  } catch {
      console.log(err)
      res.status(400).json(err)
  }
})




module.exports = router;