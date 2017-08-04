/// <reference path="include/node.d.ts" />
import {FileUploadCtrl} from "./controllers/controller-file-upload"

// Configuration
let port = 3000;
const wwwroot = __dirname + "/wwwroot";

// Import modules
let express = require("express");
var path = require('path');
let app = express();

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Create controllers
let uploadController = new FileUploadCtrl();

app.get("*", function (req, res) {
    console.log("Request for: " + req.url);
    res.sendFile(req.url, {root: wwwroot});
});

app.post("/upload", function (req, res) {
    console.log("Uploading...");
    uploadController.upload(path.join(__dirname, "/uploads/"), req, res);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

