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

app.post("/JS", async function (req, res) {

  const newTask = new task(req.body.task);
  
  await newTask.createTask();
  
  res.status(200).json(newTask).end();

})

app.listen(app.get('port'), function () {
    console.log('server running', app.get('port'));
  });
