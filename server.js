const fs = require('fs');


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

const express = require('express');
const app = express();

app.get('/server.js', (req, res) => {
    changeurl("test")
});

app.listen(3000, () => console.log('Server listening on port 3000'));


