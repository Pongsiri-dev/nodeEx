var Conn = require('http')

Conn.createServer(function(req,res){
    console.log("Server is running... ");
}).listen(9999);