const express = require('express')
var config = require('./config/config.json')
const configService = require('./configGeneratorService')
const bodyParser = require("body-parser");
const path = require("path")
const app = express()
const port = 3000

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get('/config', (req, res) => {
    res.json(config)
})

app.get('/getconfig', (req, res) => {
    res.json(configService.getConfigByIP(req.query.ip))
})

app.listen(port, () => {
    console.log(`Application is running on http://localhost:${port}`)
})