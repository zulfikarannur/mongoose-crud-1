var ObjectId = require('mongodb').ObjectId
var bookModel = require('../models/books')

var createBook = function (req,res) {
  bookModel.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }, function (err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

var updateBook = function (req,res) {
  bookModel.findOne({
    _id : ObjectId(req.params.id)
  }, function (err,resultFind) {
    if (err) {
      res.status(500).send(err)
    } else {
      resultFind.isbn = req.body.isbn || resultFind.isbn
      resultFind.title = req.body.title || resultFind.title
      resultFind.author = req.body.author || resultFind.author
      resultFind.category = req.body.category || resultFind.category
      resultFind.stock = req.body.stock || resultFind.stock
      resultFind.save(function (err,result) {
        if (err) {
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
}

var getAll = function (req,res) {
  bookModel.find({}, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var deleteBook = function (req,res) {
  bookModel.deleteOne({
    _id: ObjectId(req.params.id)
  }, function (err) {
    if (err) {
      res.send(err)
    } else {
      res.send({msg: `Book with id ${req.params.id}`})
    }
  })
}

module.exports = {
  createBook,
  updateBook,
  getAll,
  deleteBook
};
