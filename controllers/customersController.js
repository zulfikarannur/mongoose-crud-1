var customerModel = require('../models/customers')
var ObjectId = require('mongodb').ObjectId

var createCustomer = function (req,res) {
  customerModel.create({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  }, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var getAll = function (req,res) {
  customerModel.find({}, function (err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

var updateCustomer = function (req,res) {
  customerModel.findOne({
    _id : ObjectId(req.params.id)
  }, function (err,resultFind) {
    if (err) {
      res.send(err)
    } else {
      resultFind.name = req.body.name || resultFind.name
      resultFind.memberid = req.body.memberid || resultFind.memberid
      resultFind.address = req.body.address || resultFind.address
      resultFind.zipcode = req.body.zipcode || resultFind.zipcode
      resultFind.phone = req.body.phone || resultFind.phone
      resultFind.save(function (err, result) {
        if (err) {
          res.status(500).send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
}


var deleteCustomer = function (req,res) {
  customerModel.deleteOne({
    _id : ObjectId(req.params.id)
  }, function (err) {
    if (err) {
      res.send(err)
    } else {
      res.send({msg: `Customer id ${req.params.id} deleted`})
    }
  })
}
module.exports = {
  createCustomer,
  getAll,
  updateCustomer,
  deleteCustomer
};
