const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static('public'));

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    res.send('Hello World!')
  })
  

var port = process.env.PORT||3000;
app.listen(port, function(){
    console.log("server listening on port 3000!");
});