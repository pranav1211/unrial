const express = require('express');
const fs = require('fs');
const app = express();

// Route to get data (replace with your data retrieval logic)
app.get('/get-location', (req, res) => {
  fs.readFile('index.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data');
    }
    res.json(JSON.parse(data));
  });
});

// Route to update data
app.post('/update-location', (req, res) => {
  req.body // This will contain the sent JSON data
  const { newLocation } = req.body; // Destructure newLocation from request body

  fs.readFile('index.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data');
    }

    const jsdata = JSON.parse(data);
    jsdata.sitelocation = newLocation;

    fs.writeFile('index.json', JSON.stringify(jsdata), 'utf8', (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error updating data');
      }
      res.send('Location updated successfully!');
    });
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
