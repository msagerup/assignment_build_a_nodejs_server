const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res)  {
    fs.readFile('./public/index.html', 'utf8', function(err, data){
        if(err){
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Listening at http://${ hostname }:${ port }`);
})