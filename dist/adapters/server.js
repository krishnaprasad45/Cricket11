"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongo_1 = __importDefault(require("../framework/database/mongo"));
var loggingMiddleware_1 = __importDefault(require("../framework/middlewares/loggingMiddleware"));
var errorHandler_1 = require("../framework/middlewares/errorHandler");
var userRoutes_1 = __importDefault(require("../framework/routes/userRoutes"));
var app = (0, express_1.default)();
var PORT = process.env.PORT;
var HOST = process.env.HOST;
// Middleware
app.use(express_1.default.json()); // Parse JSON bodies
// Use the logging middleware
app.use(loggingMiddleware_1.default);
app.use((0, cors_1.default)());
var allowedOrigins = [HOST]; // Protected, Only allowed for HOST
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
// Connect to Database
(0, mongo_1.default)();
// Load environment variables
dotenv_1.default.config();
// Routes
app.use("/", userRoutes_1.default);
app.use(errorHandler_1.errorHandler);
// Start the server
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
