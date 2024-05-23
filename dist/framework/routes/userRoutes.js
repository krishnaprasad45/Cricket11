"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var addTeam_1 = require("../../adapters/controllers/teamController/addTeam");
var processResult_1 = require("../../adapters/controllers/teamController/processResult");
var teamResult_1 = require("../../adapters/controllers/teamController/teamResult");
var userRoute = express_1.default.Router();
userRoute.post('/add-team', addTeam_1.addTeam);
userRoute.get('/process-result', processResult_1.processResult);
userRoute.get('/team-result', teamResult_1.teamResult);
exports.default = userRoute;
