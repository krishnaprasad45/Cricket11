"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointsCalculation = void 0;
var calculateBattingPoints = function (runs, isBoundary, isSix, ballsFaced) {
    var battingPoints = runs;
    if (isBoundary)
        battingPoints += 1;
    if (isSix)
        battingPoints += 2;
    if (runs >= 30)
        battingPoints += 4;
    if (runs >= 50)
        battingPoints += 8;
    if (runs >= 100)
        battingPoints += 16;
    if (runs === 0)
        battingPoints -= 2; // points for dismissal on duck
    return battingPoints;
};
var calculateBowlingPoints = function (wickets, isLBWorBowled, maidens) {
    var bowlingPoints = wickets * 25;
    if (isLBWorBowled)
        bowlingPoints += 8;
    if (wickets >= 3)
        bowlingPoints += 4;
    if (wickets >= 4)
        bowlingPoints += 8;
    if (wickets >= 5)
        bowlingPoints += 16;
    bowlingPoints += maidens * 12;
    return bowlingPoints;
};
var calculateFieldingPoints = function (catches, stumpings, runOuts) {
    var fieldingPoints = catches * 8;
    fieldingPoints += stumpings * 12;
    fieldingPoints += runOuts * 6;
    return fieldingPoints;
};
// Calculate points
var pointsCalculation = function (userTeam, matchData) { return __awaiter(void 0, void 0, void 0, function () {
    var points_1;
    return __generator(this, function (_a) {
        try {
            points_1 = {};
            matchData.forEach(function (ball) {
                var _a, _b, _c;
                var batsman = ball.batter;
                var bowler = ball.bowler;
                var fielder = ball.fielders_involved || '';
                // Checking player is in user's team
                if (userTeam.players.includes(batsman) || userTeam.players.includes(bowler) || userTeam.players.includes(fielder)) {
                    // Initializing points for each player if not already initialized
                    (_a = points_1[batsman]) !== null && _a !== void 0 ? _a : (points_1[batsman] = 0);
                    (_b = points_1[bowler]) !== null && _b !== void 0 ? _b : (points_1[bowler] = 0);
                    (_c = points_1[fielder]) !== null && _c !== void 0 ? _c : (points_1[fielder] = 0);
                    // batting points
                    points_1[batsman] += calculateBattingPoints(ball.batsman_run, ball.non_boundary === 4, ball.non_boundary === 6, 1);
                    // bowling points
                    if (ball.isWicketDelivery) {
                        points_1[bowler] += calculateBowlingPoints(1, ball.kind === 'LBW' || ball.kind === 'Bowled', ball.kind === 'Maiden' ? 1 : 0);
                    }
                    // fielding points
                    if (ball.fielders_involved !== 'NA') {
                        points_1[fielder] += calculateFieldingPoints(ball.fielders_involved.includes('Caught') ? 1 : 0, ball.kind === 'Stumping' ? 1 : 0, ball.kind === 'Run out' ? 1 : 0);
                    }
                }
            });
            // points for captain and vice-captain
            points_1[userTeam.captain] *= 2;
            points_1[userTeam.viceCaptain] *= 1.5;
            // total points for each player
            Object.keys(points_1).forEach(function (player) {
                points_1[player] = Math.round(points_1[player]);
            });
            return [2 /*return*/, points_1];
        }
        catch (error) {
            console.error("Error calculating points:", error);
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.pointsCalculation = pointsCalculation;
