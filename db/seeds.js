require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;

const User = require('../models/User')
const Store = require('../models/Store')
const Product = require('../models/Product')

const product1 = new Product({
    name: 'Nintendo',
    price: 299,
    description: 'The Nintendo Switch is the seventh major video game console developed by Nintendo.',
    qty: 10
})

const product2 = new Product({
    name: 'Mario Tennis',
    price: 59,
    description: 'Is a sports video game developed by Camelot Software Planning and published by Nintendo for the Nintendo 64 video game console',
    qty: 8
})

const product3 = new Product({
    name: 'Playstation 4',
    price: 299,
    description: 'The PlayStation 4 (PS4) is an eighth-generation home video game console developed by Sony Interactive Entertainment',
    qty: 7
})

const store = new Store({
    name: 'My Amazing Store',
    description: 'This is where I sell all the things that I believe are amazing',
    products: [product1, product2, product3]
})

const user = new User({
    e_mail: 'example@gmail.com',
    userName: 'ExampleUser',
    password: 'YouWillNeverGuess01234',
    stores: [store]
})

const saved = async () => {
  await User.remove()
  await user.save()
  await console.log('Successful Save')
  db.close()
}

saved()
