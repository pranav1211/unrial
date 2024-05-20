const http = require('http');


const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World');
  var url = request.url
  if (url === '/test') {
    console.log('site teseted')
  }
  console.log('site accessed')
})

server.listen(8080, 'localhost', () => {
  console.log("server started")
})


