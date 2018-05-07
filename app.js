const http = require('http');
const hostname = 'localhost';
const port = 3000;

const serv = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text-plain');
    res.end('Hello Word of MeanStack (Node.js  + Javascript es6 )');
});

serv.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});