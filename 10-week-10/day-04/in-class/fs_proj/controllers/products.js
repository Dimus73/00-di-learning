const { getAllProducts,
				getProduct

} = require ('../modules/products.js')

const _getAllProducts = (req, res) => {
	getAllProducts()
	.then(data => {
		res.json(data)
	})
	.catch (err =>{
		console.log(err);
		res.status(404).json({message:err.message})
	})
}

const _getProduct = (req, res) => {
	const id = req.params.id
	getProduct(id)
	.then(data => {
		res.json(data)
	})
	.catch (err =>{
		console.log(err);
		res.status(404).json({message:err.message})
	})
}

const _searchProduct = (req, res) => {
	const id = req.params.id
	searchProduct(id)
	.then(data => {
		res.json(data)
	})
	.catch (err =>{
		console.log(err);
		res.status(404).json({message:err.message})
	})
}


module.exports = {
	_getAllProducts,
	_getProduct,
	_searchProduct
}