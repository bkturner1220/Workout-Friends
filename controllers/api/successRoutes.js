const router = require('express').Router();
const { Success } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newSuccess = await Success.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSuccess);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const successData = await Success.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!successData) {
//       res.status(404).json({ message: 'No article found with this id!' });
//       return;
//     }

//     res.status(200).json(successData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
