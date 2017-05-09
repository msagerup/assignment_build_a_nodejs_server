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
            var requestData = {
                'url': req.url,
                'method': req.method,
                'httpVersion': req.httpVersion,
                'header': req.headers
                
            }
            var sendData = {
                'status': res.statusMessage,
                'code': res.statusCode,
                'resHeader': res._header,
            }
            res.end(data
            .replace('req',JSON.stringify(requestData, null, 2))
            .replace('res', JSON.stringify(sendData, null, 2)));
        }
    });
});

server.listen(port, hostname, ()=> {
     console.log(`Server is listening on http://${hostname}:${port}/`);

})
    
