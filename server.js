const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const fs = require('fs');
const app = express();

const filename = 'imageUrls.json';

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(fs.readFileSync(filename));
});

app.post('/set', (req, res) => {
    fs.writeFileSync(filename, JSON.stringify(req.body))
    res.send('ok');
})

let server = app.listen(8081, () => {
    const host = 'localhost'
    const port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
