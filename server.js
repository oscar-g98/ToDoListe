const fs = require("fs");
const bodyParser = require('body-parser');
const express = require("express");
const {client} = require("pg")
const app = express();
app.use("/JS", express.static('./JS/'));
app.use(express.static('public'));
app.use(bodyParser.json());

const port = (process.env.PORT||3000);

app.listen(port, function(){
    console.log("server listening on port 3000!");
});
