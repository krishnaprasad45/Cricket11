"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = function (err, req, res, next) {
    console.error(err.stack); //  for debugging
    var statusCode = err.statusCode || 500;
    var message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        message: message,
    });
};
exports.errorHandler = errorHandler;
