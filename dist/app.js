"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Cats_1 = require("./Cats");
var app = express();
var port = 4000;
var data = [1, 2, 3, 4];
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middleware");
    next();
});
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middleware22");
    next();
});
app.get('/', function (req, res) {
    res.send({ cats: Cats_1.Cat });
});
app.get('/cats/blue', function (req, res, next) {
    console.log(req.rawHeaders[1]);
    res.send({ blue: Cats_1.Cat[0] });
});
app.get('/cats/som', function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send({ som: Cats_1.Cat[1] });
});
app.use(function (req, res, next) {
    console.log('this is error middleware');
    res.send({ error: '404 not found' });
    next();
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map