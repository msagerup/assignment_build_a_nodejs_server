const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer(function(req, res){
    fs.readFile('./public/index.html', 'utf8', function(err, data){
        if(err){
            res.writeHead(404);
            res.end('File still not found...');
        } else {
            res.writeHead(202, {
                'Content-type': 'text/html'
            });
            res.end(data);
        }
    });
});

server.listen(port, hostname, ()=> {
     console.log(`Server is listening on http://${hostname}:${port}/`);

})
    
