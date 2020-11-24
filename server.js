const fs = require("fs");
const bodyParser = require('body-parser');
const express = require("express");
const {client} = require("pg")
const app = express();
app.use("/JS", express.static('./JS/'));
app.set('port', port);
app.use(express.static('public'));
app.use(bodyParser.json());


const port = process.env.PORT||8080;
app.listen(port, function(){
    console.log("server listening on port 8080!");
});
