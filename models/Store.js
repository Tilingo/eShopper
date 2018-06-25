const mongoose = require('mongoose')
const storeSchema = require('../db/schemas/storeSchema')

const Store = mongoose.model('store', storeSchema)

module.exports = Store