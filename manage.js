const http = require('http')

const server = http.createServer((request,response)=>{    
    const path = request.url;
    if(path === '/yoma') {
        response.end("v1")
    }
    else if(path === '/yomama'){
        response.end("v1")
    }
})

server.listen(6003,"64.227.143.61",()=>{
    console.log("listening")
})