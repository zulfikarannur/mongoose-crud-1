var router = require('express').Router()
var transactionsController = require('../controllers/transactionsController')

router.post('/', transactionsController.createTransaction)
router.get('/', transactionsController.getAll)
router.patch('/:id', transactionsController.updateTransaction)

module.exports = router;
