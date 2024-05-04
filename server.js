const fs = require('fs');


var newurl = "https://medium.com/@riav5012";
changeurl(newurl)

function changeurl(newurl) {
    fs.readFile('index.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return;
        }

        const jsdata = JSON.parse(data)

        jsdata.sitelocation = newurl

        fs.writeFile('index.json', JSON.stringify(jsdata), 'utf8', (err) => {
            if (err) {
                console.error(err)
                return;
            }
            console.log("Rewrite success")
        })

    });
}

const http = require('http');
const { exec } = require('child_process');

const hostname = '0.0.0.0';
const port = 6001;

const server = http.createServer((req, res) => {
    const url = req.url;
    const substr = '/qrep'
    if (url.includes(substr)) {
        console.log('server called');
        const querystring = url.split('?')[1];
        const parameters = new URLSearchParams(querystring)
        const data1 = parameters.get('data1')
        changeurl(data1)
    }
}
);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
