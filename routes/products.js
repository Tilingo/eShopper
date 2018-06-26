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

router.post('/', (req, res) => {
    const newProduct = new Product(req.body)

    User.findById(req.params.userId)
        .then(user => {
            user.stores.id(req.params.storeId).products.push(newProduct)
            return user.save()
        })
        .then(() => {
            res.send({
                newProduct
            })
        })
})

module.exports = router