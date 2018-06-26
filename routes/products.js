const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../models/User')
const Product = require('../models/Product')

router.get('/', (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            const products = user.stores.id(req.params.storeId)
            res.send({
                products
            })
        })
})

router.get('/:id', (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            const product = user.stores.id(req.params.storeId).products.id(req.params.id)
            res.send({
                product
            })
        })
})



module.exports = router