"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalPoints = void 0;
function calculateTotalPoints(pointsData) {
    var totalPoints = 0;
    for (var player in pointsData) {
        totalPoints += pointsData[player];
    }
    return totalPoints;
}
exports.calculateTotalPoints = calculateTotalPoints;
