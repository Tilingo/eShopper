var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.find()
  res.send({
    users
  })
});

router.post('/', async (req, res) => {
  const newUser = new User(req.body)
  newUser.save().then(user => {
    res.send({
      user
    })
  })
})

router.patch('/:id', async (req, res) =>{
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send({
    user
  })
})

module.exports = router;
