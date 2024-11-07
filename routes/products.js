const express = require("express")
const router = express.Router()
const productsController = require('../controllers/products')

router.post('/', productsController.addProduct)
router.get('/', productsController.getProducts)
router.get('/:id', productsController.getProduct)
router.patch('/:id', productsController.updateProduct)
router.delete('/:id', productsController.deleteProduct)

module.exports = router