const http = require('http');
const host = 'localhost';
const port = 3000;

const requestListener = function(req, res){
	res.setHeader('Content-Type', 'text/html')
	res.write(`<h1> This is my first response.</h1> <br> <h2>This is my second response.</h2><br> <h3>This is my therd response.<h3>`)
	res.end();
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`); 
});