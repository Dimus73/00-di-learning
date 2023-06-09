const{db} = require('../config/db.js');

const getAllProducts = () => {
	return db('products')
	.select('id', 'name', 'price')
	.orderBy('name')
}

const getProduct = (product_id)=>{
	return db('products')
	.select('id', 'name', 'price')
	.where({id:product_id})
}

const searchProduct = (product_name)=>{
	return db('products')
	.select('id', 'name', 'price')
	.whereLike('name', `${product_name}%`)
}



module.exports = {
	getAllProducts,
	getProduct
}
