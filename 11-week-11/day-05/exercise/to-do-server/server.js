const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const notes_router = require('./routers/noutes');


const app = express();
dotenv.config();

app.listen(process.env.PORT || 3001, ()=>{
	console.log(`Server run on port ${process.env.PORT || 3001}`);
})

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', notes_router.router);