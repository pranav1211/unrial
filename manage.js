const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');

fs.readFile('index.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const jsdata = JSON.parse(data);
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
    const substr = '/yoma'
    response.end("name changed");
    // if (path.includes(substr)) {
    //     console.log('server called');
    //     const querystring = url.split('?')[1];
    //     const parameters = new URLSearchParams(querystring)
    //     const data1 = parameters.get('data1')
    //     changeurl(data1)        
    }

}).listen(6003);
