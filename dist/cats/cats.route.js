"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cats_model_1 = require("./cats.model");
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/cats', function (req, res) {
    try {
        res.status(200).send({
            success: true,
            data: {
                Cat: cats_model_1.Cat,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error
        });
    }
});
router.get('/cats/:id', function (req, res) {
    var id = req.params.id;
    console.log("id", id);
    try {
        var cats = cats_model_1.Cat.find(function (cat) { return cat.id === id; });
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error
        });
    }
});
router.post('/cats', function (req, res) {
    try {
        var data = req.body;
        cats_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: {
                Cat: cats_model_1.Cat,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error
        });
    }
});
exports.default = router;
//# sourceMappingURL=cats.route.js.map