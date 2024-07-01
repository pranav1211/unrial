const http = require('http');
const fs = require('fs');
const { URLSearchParams } = require('url'); // Import URLSearchParams from 'url' module

let jsdata; // Define jsdata outside of fs.readFile to ensure it's accessible globally

fs.readFile('index.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    jsdata = JSON.parse(data); // Assign data to jsdata
});

function changeurl(newurl) {
    var newname = "https://" + newurl;
    jsdata.sitelocation = newname;

    fs.writeFile('index.json', JSON.stringify(jsdata), 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Rewrite success");
    });
}

http.createServer((request, response) => {
    const path = request.url;
    const substr = '/yoma';

    if (path.includes(substr)) {
        console.log('server called');
        const querystring = path.split('?')[1]; // Use 'path' instead of 'url' to get the query string
        const parameters = new URLSearchParams(querystring);
        const data1 = parameters.get('data1');
        changeurl(data1);
        response.end("name changed");
    } else {
        response.statusCode = 404;
        response.end("Not Found");
    }

}).listen(6003);

console.log('Server running at http://localhost:6003/');
