const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const products_router = require('./routes/products.js')



const app = express()
dotenv.config()

app.listen(process.env.PORT||3001, ()=>{
  console.log(`run on port ${process.env.PORT||3001}`);
})

app.use('/', express.static(__dirname +'/public'))
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use( products_router.router)


// /api/search - get - name=ip search the db by name of products
