const fs = require('fs');
const express = require('express');
const app = express();
const port = 80;

app.use(express.json());

app.post('/updateData', (req, res) => {
    const { newurl } = req.body;
    if (!newurl) {
        return res.status(400).json({ error: 'New URL not provided' });
    }

    changeurl(newurl);
    res.json({ message: 'Data updated successfully' });
});

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
