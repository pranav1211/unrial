const http = require('http')

http.createServer((request,response)=>{
    response.end('Hello world')
}).listen(6002);