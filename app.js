var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))

var book = require('./router/book')
var customer = require('./router/customer')
var transaction = require('./router/transaction')

app.use('/api/books', book)
app.use('/api/customers', customer)
app.use('/api/transactions', transaction)

mongoose.connect('mongodb://localhost/library_mongoose_2', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("MongoDB Connected");
  }
})

app.listen(3000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port 3000");
  }
})
