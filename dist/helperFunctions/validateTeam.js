"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTeam = void 0;
var validateTeam = function (teamData) {
    var teamName = teamData.teamName, players = teamData.players, captain = teamData.captain, viceCaptain = teamData.viceCaptain;
    if (!teamName) {
        throw { statusCode: 400, message: "Team name is required." };
    }
    if (!players || !Array.isArray(players) || players.length !== 11) {
        throw { statusCode: 400, message: "Players must contain exactly 11 player names." };
    }
    if (!captain) {
        throw { statusCode: 400, message: "Captain is required." };
    }
    if (!viceCaptain) {
        throw { statusCode: 400, message: "Vice-captain is required." };
    }
    if (!players.includes(captain)) {
        throw { statusCode: 400, message: "Captain must be one of the players." };
    }
    if (!players.includes(viceCaptain)) {
        throw { statusCode: 400, message: "Vice-captain must be one of the players." };
    }
    return true;
};
exports.validateTeam = validateTeam;
