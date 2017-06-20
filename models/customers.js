var mongoose = require('mongoose')

var customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  memberid: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
},{
  timestamps : true
})

var customerModel = mongoose.model('Customer', customerSchema)

module.exports = customerModel;
