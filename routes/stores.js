const express = require('express')
const router = express.Router({mergeParams: true})
const User = require('../models/User')
const Store = require('../models/Store')

router.get('/', async (req, res) =>{
    const user = await User.findById(req.params.userId)
    res.send({
        stores: user.stores
    })
})

router.post('/', (req, res) => {
    const newStore = new Store(req.body)
    
    User.findById(req.params.userId)
    .then(user=>{
        user.stores.push(newStore)
        return user.save()
    })
    .then(()=>{
        res.send({
            newStore
        })
    })
})

router.get('/:id', (req, res)=>{
    User.findById(req.params.userId)
    .then(user=>{
        const store = user.stores.id(req.params.id)
        res.send({
            store
        })
    })
})

module.exports = router