var mongoose = require('mongoose')

var transactionSchema = new mongoose.Schema({
  memberid: {
    type: String,
    required: true,
    ref: 'Customer'
  },
  days: {
    type: Number,
    required: true
  },
  out_date: {
    type: Date,
    default: Date.now,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  },
  in_date: {
    type: Date
  },
  fine: {
    type: Number
  },
  booklist:[{
    type: mongoose.Schema.ObjectId,
    ref: 'Book'
  }]
})

var transactionModel = mongoose.model('Transaction', transactionSchema)

module.exports = transactionModel;
