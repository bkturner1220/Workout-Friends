const router = require('express').Router();
const { Routine, Task } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const taskData = await Routine.findAll({
      where: {
        day: 1,
        include: [
          {
            model: Task,
            attributes: ['description'],
          },
        ],
      }
    });

    const tasks = taskData.map((task) => task.get({ plain: true }));

    res.render('routine', {
      tasks,
    })
  } catch (err) {
    res.status(400).json(err);
  }
});


// var cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// var cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }

// var cb2 = function (req, res) {
//   res.send('Hello from C!')
// }

// app.get('/example/c', [cb0, cb1, cb2])



module.exports = router;