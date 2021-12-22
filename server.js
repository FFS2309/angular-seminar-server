const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const fs = require('fs');
const app = express();

const filename = 'imageUrls.json';

var fileContent = JSON.parse("[]");

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(JSON.stringify(fileContent));
});

app.post('/set', (req, res) => {
    fileContent = req.body;
    res.send('ok');
})

let server = app.listen(8081, () => {
    const host = 'localhost'
    const port = server.address().port

    fileContent = JSON.parse(fs.readFileSync(filename).toString())
    console.log("Example app listening at http://%s:%s", host, port)
})

process.on("SIGTERM", endProgram).on("SIGINT", endProgram)

function endProgram(){
    fs.writeFileSync(filename, JSON.stringify(fileContent))
    server.close()
}