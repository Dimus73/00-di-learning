const express = require('express');
const router = express.Router();

const {_getAllProducts,
      _getProduct,
      _searchProduct,
      _insertProduct,
      _deleteProduct,
      _updateProduct
      } = require('../controllers/products.js')

router.get('/api/search', _searchProduct)
router.get('/api/products', _getAllProducts)
router.get('/api/products/:id', _getProduct)
router.post('/api/products', _insertProduct)
router.delete('/api/products/:id', _deleteProduct)
router.put('/api/products/:id', _updateProduct)

module.exports = {
  router
}
