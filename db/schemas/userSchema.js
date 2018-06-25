const Schema = require('mongoose').Schema
const storeSchema = require('./storeSchema')

const userSchema = new Schema({
    e_mail: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    stores: [storeSchema]
})

module.exports = userSchema