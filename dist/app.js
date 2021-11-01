"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Cats_1 = require("./Cats");
var app = express();
var port = 4000;
var data = [1, 2, 3, 4];
app.get('/', function (req, res) {
    res.send({ cats: Cats_1.Cat });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map