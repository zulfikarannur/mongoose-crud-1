var transactionModel = require('../models/transactions')
var moment = require('moment')

var createTransaction = function (req,res) {
  transactionModel.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: new Date(),
    due_date: moment(this.out_date).day(this.days),
    booklist: req.body.booklist.split(",")
  }, function (err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var updateTransaction = function (req,res) {
  transactionModel.findOne({
    _id : ObjectId(req.params.id)
  }, function (err,resultFind) {
    if (err) {
      res.status(500).send(err)
    } else {
      resultFind.in_date = new Date()
      resultFind.fine = moment(this.in_date).diff(resultFind.out_date,'days') * 500
      resultFind.save(function (err,result) {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
}

var getAll = function (req,res) {
  transactionModel.find({})
  .populate('booklist','title')
  .exec(function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

module.exports = {
  createTransaction,
  updateTransaction,
  getAll
};
