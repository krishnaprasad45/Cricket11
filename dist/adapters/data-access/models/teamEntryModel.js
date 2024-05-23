"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var teamEntrySchema = new mongoose_1.default.Schema({
    userId: {
        type: Number,
        required: true,
    },
    teamName: {
        type: String,
        required: true,
    },
    players: {
        type: [String],
        required: true,
    },
    captain: {
        type: String,
        required: true,
    },
    viceCaptain: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
var TeamEntry = mongoose_1.default.model("TeamEntry", teamEntrySchema);
exports.default = TeamEntry;
