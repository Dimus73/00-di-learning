const http = require('http');
const host = 'localhost';
const port = 8080;
const user = {
	first_name: 'John',
	last_name: 'Doe'
}

const requestListener = function(req, res){
	res.setHeader = ('Content-Type', 'text/html')
	res.write(JSON.stringify(user))
	res.end()
}

const server = http.createServer(requestListener);
server.listen(port, host, ()=>{
	console.log(`Server is running on http://${host}:${port}`);
})