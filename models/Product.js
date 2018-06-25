const mongoose = require('mongoose')
const productSchema = require('../db/schemas/productSchema')

const Product = mongoose.model('product', productSchema)

module.exports = Product