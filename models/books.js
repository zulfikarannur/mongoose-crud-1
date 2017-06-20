var mongoose = require('mongoose')

var bookSchema = new mongoose.Schema({
  isbn: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
},{
  timestamps : true
})

var bookModel = mongoose.model('Book', bookSchema)

module.exports = bookModel;
