var router = require('express').Router()
var customersController = require('../controllers/customersController')

router.post('/', customersController.createCustomer)
router.get('/', customersController.getAll)
router.patch('/:id', customersController.updateCustomer)
router.delete('/:id', customersController.deleteCustomer)

module.exports = router;
