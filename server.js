// const fs = require('fs');


// function changeurl(newurl) {
//     fs.readFile('index.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error(err)
//             return;
//         }

//         const jsdata = JSON.parse(data)

//         jsdata.sitelocation = newurl

//         fs.writeFile('index.json', JSON.stringify(jsdata), 'utf8', (err) => {
//             if (err) {
//                 console.error(err)
//                 return;
//             }
//             console.log("Rewrite success")
//         })

//     });
// }

// const http = require('http');
// const { exec } = require('child_process');

// const hostname = '64.227.143.61';
// const port = 6001;

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const substr = '/qrep'
//     if (url.includes(substr)) {
//         console.log('server called');
//         const querystring = url.split('?')[1];
//         const parameters = new URLSearchParams(querystring)
//         const data1 = parameters.get('data1')
//         changeurl(data1)
//     }
// }
// );

// server.listen(port, hostname, () => {
//     console.log(`Server running at https://${hostname}:${port}/`);
// });

const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port

app.get('/your-endpoint', (req, res) => {
    // Handle your request logic here
    // For example, generate some data
    const data = { message: 'Hello from your Node.js server!' };
    res.json(data);
});

// **Important:** Configure CORS headers if necessary for cross-origin requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Adjust origin accordingly
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Adjust headers as needed
    next();
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

