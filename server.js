const fs = require("fs");
const bodyParser = require('body-parser');
const express = require("express");
const {client} = require("pg")
const app = express();
app.use("/JS", express.static('./JS/'));
app.set('port', port);
app.use(express.static('public'));
app.use(bodyParser.json());


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
