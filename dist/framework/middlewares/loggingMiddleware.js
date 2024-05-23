"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loggingMiddleware = function (req, res, next) {
    console.log("Received ".concat(req.method, " request for ").concat(req.url));
    console.log('Request Body:', req.body);
    next();
};
exports.default = loggingMiddleware;
