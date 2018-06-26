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



module.exports = router