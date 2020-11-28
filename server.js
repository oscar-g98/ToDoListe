const fs = require("fs");
const bodyParser = require('body-parser');
const {Client} = require("pg");
const express = require("express");
const server= express();
const path = require('path');
const PORT = process.env.PORT || 3000;


express()
  .use ("/JS", express.static("./JS"))
  .use(express.static(path.join(__dirname, 'Public')))
  .set('views', path.join(__dirname, 'server'))
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));


  
const client = new Client({
    user: "dudkpuijfzevxz",
    password: "65cfb20a08ce96cb267841a0bc36a1e2510dfd5f16b22bf01b337b0d0f4e096d",
    host: "postgres://dudkpuijfzevxz:65cfb20a08ce96cb267841a0bc36a1e2510dfd5f16b22bf01b337b0d0f4e096d@ec2-46-137-124-19.eu-west-1.compute.amazonaws.com:5432/d6c72hpen6sbb1",
    port: "5432",
    database: "d6c72hpen6sbb1"
  })
  
  client.connect()
  .then(()=> console.log("Connected"))
  .catch(error => console.log("ERROR",error.message || error))
  .finally(() => client.end())
