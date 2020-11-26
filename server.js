const fs = require("fs");
const bodyParser = require('body-parser');
const express = require("express");
const {client} = require("pg")
const app = express();
const port = process.env.PORT||3000;
const routes = require("./routes");

app.use("/JS", express.static('./JS/'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.set('port', port);
app.use(routes);

app.listen(app.get('port'), function () {
    console.log('server running', app.get('port'));
  });
