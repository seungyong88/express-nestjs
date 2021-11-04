"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.updatePartCat = exports.updateCat = exports.createCat = exports.readCat = exports.readAllcat = void 0;
var cats_model_1 = require("./cats.model");
var readAllcat = function (req, res) {
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
};
exports.readAllcat = readAllcat;
var readCat = function (req, res) {
    var id = req.params.id;
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
};
exports.readCat = readCat;
var createCat = function (req, res) {
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
};
exports.createCat = createCat;
var updateCat = function (req, res) {
    try {
        var params_1 = req.params;
        var body_1 = req.body;
        var result_1;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === params_1.id) {
                cat = body_1;
                result_1 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cat: result_1,
                cats: cats_model_1.Cat
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error
        });
    }
};
exports.updateCat = updateCat;
var updatePartCat = function (req, res) {
    try {
        var params_2 = req.params;
        var body_2 = req.body;
        var result_2;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === params_2.id) {
                cat = body_2;
                result_2 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cat: result_2,
                cats: cats_model_1.Cat
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error
        });
    }
};
exports.updatePartCat = updatePartCat;
var deleteCat = function (req, res) {
    try {
        var params_3 = req.params;
        var body_3 = req.body;
        var result_3;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === params_3.id) {
                cat = body_3;
                result_3 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: {
                cat: result_3,
                cats: cats_model_1.Cat
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error
        });
    }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cats.service.js.map