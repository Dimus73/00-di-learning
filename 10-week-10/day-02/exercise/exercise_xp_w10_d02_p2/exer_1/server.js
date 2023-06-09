const express= require('express');
const cors = require('cors');

const {db} = require('./config/db.js');

const app = express();
const port = 3520;
const info = user = {firstName: 'John',lastName: 'Doe'};

app.use(cors());

app.get('/', (req, res)=>{
	res.send(JSON.stringify(user))
})

app.listen(port)

db('products')
.select('*')
.then(data={
	console.log(data)
})
.catch(e=>{
	console.log(e);
})
