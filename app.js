require("dotenv").config();
var express = require('express');
var path = require('path');
var logger = require('morgan');


var AssistantV1 = require('watson-developer-cloud/assistant/v1');

// Set up Assistant service wrapper.
var service = new AssistantV1({
  username: 'de1f6746-530d-432f-b78f-48d76111daf1', // replace with service username
  password: 'iIXvuaRH0RUP', // replace with service password
  version: '2018-02-16'
});

var workspace_id = '650c45b2-4c75-4b41-83ac-3a2ea3df844e'; // replace with workspace ID

// Start conversation with empty message.
service.message({
  workspace_id: workspace_id
}, processResponse);

// Process the service response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
    console.log(response.output.text[0]);
  }
}




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

module.exports = app;