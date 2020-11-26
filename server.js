const fs = require("fs");
const bodyParser = require('body-parser');
const express = require("express");
const {client} = require("pg")
const app = express();


app.use("/JS", express.static('./JS/'));
app.use(express.static(__dirname + '/public'));
app.use('/', express.static('client'));
app.use(bodyParser.json());
app.set('port', process.env.PORT||3000);

app.listen(app.get('port'), function () {
    console.log('server running', app.get('port'));
  });

