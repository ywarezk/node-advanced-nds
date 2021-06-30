"use strict";
/**

express server using typescript
@types/express
@types/mongodb

ES6

 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
var express_1 = __importDefault(require("express"));
var mongodb_1 = require("mongodb");
var app = express_1.default();
var client = new mongodb_1.MongoClient('mongodb://yariv:12345678@localhost:27017');
// client.connect().then()
app.get('/hello', function (req, res, next) {
    res.send('hello');
});
app.listen(3000, function () {
    console.log('we are now listening');
});
//# sourceMappingURL=app.js.map