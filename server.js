const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(express.static('public'));

let cowData = {
    location: { lat: 0, lng: 0 },
    address: '',
    cowCount: 0,
    cows: []
};

app.post('/update', (req, res) => {
    cowData = req.body;
    res.sendStatus(200);
});

app.get('/data', (req, res) => {
    res.json(cowData);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
