const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
// const Store = require('../models/Store')

router.get('/', async (req, res) =>{
    const user = await User.findById(req.params.userId)
    res.send({
        stores: user.stores
    })
})

module.exports = router