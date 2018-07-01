require("dotenv").config();
var express = require('express');
var path = require('path');
var logger = require('morgan');

// var ConversationV1 = require('watson-developer-cloud/conversation/v1');
// var conversation = new ConversationV1({
//   version: '2018-02-16',
//   username: 'de1f6746-530d-432f-b78f-48d76111daf1',
//   password: 'iIXvuaRH0RUP',
//   url: 'https://gateway.watsonplatform.net/assistant/api/v1/workspaces/650c45b2-4c75-4b41-83ac-3a2ea3df844e/message/'
// });

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');
});
// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

let usersRouter = require('./routes/users')
let storesRouter = require('./routes/stores')
let productsRouter = require('./routes/products')
let watsonRouter = require('./routes/watson')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/api/users', usersRouter)
app.use('/api/users/:userId/stores', storesRouter)
app.use('/api/users/:userId/stores/:storeId/products', productsRouter)
app.use('/watson', watsonRouter)

module.exports = app;