const http = require('http');

const app = (req,res) => {
 res.writeHead(200);
 res.end('This is a test');
};

const server = http.createServer(app);

server.listen(3000);