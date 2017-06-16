/// <reference path="include/node.d.ts" />
// Configuration
let port = 3000;
let wwwroot = "wwwroot";
// Import modules
let express = require("express");
let app = express();
app.get('/', function (req, res) {
    res.sendFile(wwwroot + "/" + req.uri);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
