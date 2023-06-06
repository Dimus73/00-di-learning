//01
const express = require('express')
const app = express();
const port = 3000
const user = {
	firstname: 'John',
	lastname: 'Doe'
}
//01
app.get('/', (req,res)=>
	res.send('<h1> This is my first response.</h1> <br> <h2>This is my second response.</h2><br> <h3>This is my therd response.<h3>')
)

app.get('/json/', (req,res)=>{
	res.json(user)
})
//02

app.listen(port)

//02

