const express = require('express')
const app = express()
const port = 3050
const cors = require("cors")

app.use(cors())
app.use(express.json());

app.get('/api/hello', (req,res)=>{
	res.send('Hello From Express');
})

app.post('/api/word', (req,res)=>{
	let reqData = req.body;
	console.log(reqData);
	 
	console.log('HHHHHHHHHHHHHHH');
	res.send(`I received your POST request. This is what you sent me: ${reqData.word}`)
})
app.listen(port) 

