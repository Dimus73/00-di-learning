const express = require('express');

const {products}=require('./config/data.js');

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.listen(3001, ()=>{
	console.log ('Server is running on 3001');
})

// app.get('/api/users',(req, res)=>{
// 	res.send("hello")
// })

// app.get('/api/product',(req, res) =>{
// 	res.send(products)
// })

app.get('/api/product',(req, res) =>{
	res.json(products)
})

app.get('/api/product/:id',(req,res)=>{
	console.log(req.params);
	let v = req.params['id']
	let r;
	for (d of products){
		if (d.id==v){
			r=d;
		}
	}
	if (!r){
		return res.status(404).json({message:'Prodact not found'})
	}

	res.status(200).json(r)
})

// app.get('/api/search', (req, res)=>{
// 	console.log(req.query);
// 	let im=req.query.pp.toLowerCase();
// 	let rser = products.filter((value)=>{
// 		value.toLowerCase().includes(im);
// 	})
// 	// res.send('ok')
// 	res.json(rser)
// })


app.post('/api/product',(req,res) => {
	console.log(req.body);
	// res.send('ok from post')
	res.status(201).json(products)
})