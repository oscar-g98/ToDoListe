const fs = require("fs");
const bodyParser = require('body-parser');
const express = require("express");
const {client} = require("pg")
const app = express();
app.use("/JS", express.static('./JS/'));
app.set('port', port);
app.use(express.static('public'));
app.use(bodyParser.json());


const port = process.env.PORT||3000;
app.listen(server.get('port'), function () {
  console.log('server running', server.get('port'));
});
