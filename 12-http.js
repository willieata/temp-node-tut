const http = require('http');

const server = http.createServer((req,res) =>{
if(req.url === '/'){
    res.end('Welcome to homepage')
}
if(req.url === '/about'){
    res.end('Welcome to About')
}

res.end('No No No , There dont have this page.')


})


server.listen(5000);