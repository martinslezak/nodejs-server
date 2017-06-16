/// <reference path="include/node.d.ts" />

// Configuration
let port = 3000;
const wwwroot = __dirname + "/wwwroot";

// Import modules
let express = require("express");
let app = express();

app.get("*", function (req, res) {
  res.sendFile(req.url, {root: wwwroot});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})