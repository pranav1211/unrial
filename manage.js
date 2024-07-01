const http = require('http')

http.createServer((request,response)=>{
    var url = request.url;
    if(url===':6003/q'){
        response.end('Hello world')
    }
}).listen(6003);