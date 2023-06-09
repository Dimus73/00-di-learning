const express = require('express');
const router = express.Router();

const {_getAllProducts,
	     _getProduct,
			 _searchProduct

} = require ('../controllers/products.js')

router.get ('/api/products', _getAllProducts )
router.get ('/api/products/:id', _getProduct )
router.get ('/api/search/', _searchProduct )
	
module.exports = {
	router
}