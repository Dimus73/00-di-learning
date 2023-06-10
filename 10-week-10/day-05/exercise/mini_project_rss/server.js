const express = require('express');
const ejs = require('ejs');

const app = express();

const {
	homePage
} = require('./pages/home_page.js')

const {
	search
} = require('./pages/search.js')

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3030, ()=>{
	console.log(`Server run on port ${process.env.PORT || 3030}`);
}) 

app.get('/', homePage);
app.get('/search', search);