const http = require('http')

http.createServer((request,response)=>{
    var path = request.url;
    response.end('test');
    if(path === '/yoma') {
        response.end("v1")
    }
    else if(path === '/yomama'){
        response.end("v1")
    }
}).listen(6003);
