var express = require("express");

var router = express.Router();


router.get("/JS", function(req, res) {
   // console.log("hello");
res.render("index");
});

module.exports = router;
