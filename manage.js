const http = require('http');
const fs = require('fs');
const { URLSearchParams } = require('url'); // Import URLSearchParams from 'url' module
const thepasskey = process.env.PASS || fs.readFileSync('/etc.environment','utf8').trim()

let jsdata;

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
        const querystring = path.split('?')[1]; 
        const parameters = new URLSearchParams(querystring);
        const data1 = parameters.get('data1');
        const data2 = parameters.get('data2');
        if(data2 == thepasskey){
            changeurl(data1);
        }
        else{
            response.end("Unauthorized")
        }
        
        response.end("name changed");
    } else {
        response.statusCode = 404;
        response.end("Not Found");
    }

}).listen(6003);

console.log('Server running at http://localhost:6003/');
