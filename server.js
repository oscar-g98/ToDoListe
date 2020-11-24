const fs = require("fs");
const express = require("express");
const {client} = require("pg")
const app = express();
app.use("/JS", express.static('./JS/'));
app.use(express.static('public'));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'front_end', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'front_end', 'build', 'index.html'))
    });
    
  }

var port = process.env.PORT||3000;
app.listen(port, function(){
    console.log("server listening on port 3000!");
});
