var Conn = require('http')

Conn.createServer(function(req,res){
    console.log("Server is running... "+res);
}).listen(9999);