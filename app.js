const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Constants
const cert = fs.readFileSync("./ssl/cert.pem");
const ca = fs.readFileSync("./ssl/bundle.crt");
const key = fs.readFileSync("./ssl/key.pem");
const options = {
  key,
  cert,
  ca,
};


// const HOST=process.env.HOST||"192.168.253.53"
// App
const app = express();
const httpsServer = https.createServer(options, app);
// Constants
const PORT = process.env.PORT || 8080;

// App
app.use(express.static('dist'));
// app.use(express.static('dist'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});


httpsServer.listen(PORT);
// app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
