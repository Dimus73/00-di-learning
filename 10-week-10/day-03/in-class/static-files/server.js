const express=require('express')

const app = express()

app.listen(3001,()=>{
	console.log('run on 3001');
})

console.log(__dirname+'/public');
app.use('/dima',express.static(__dirname+'/public')) 
app.get('/aboutme/:hobby',(req,res)=>{
	// res.sendFile(__dirname+'/public/about.html')
	const hob=req.params.hobby
	if(isNaN(hob)){
		return res.status(200).send(`This is my hobby:${hob}`)
	}
app.get('/pic/',(req,res)=>{
	return res.sendFile(__dirname+'/public/myimage.html')
})
	res.status(405).send('hobby is not param')
})

