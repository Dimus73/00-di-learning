const http = require("http");
const {res001, tDate} = require('./script.js')
const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) {
	// res.writeHead(200);
	res.setHeader('Content-Type', 'text/html')
	res.write(`My first server! <h1>Test<\/h1><p>${res001}</p><p> Today is ${tDate}</p>`)
	res.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});