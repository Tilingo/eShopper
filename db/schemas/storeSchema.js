const Schema = require('mongoose').Schema
const productSchema = require('./productSchema')

const storeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    products: [productSchema]
})

module.exports = storeSchema