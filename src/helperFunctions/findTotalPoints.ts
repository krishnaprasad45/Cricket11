export function calculateTotalPoints(pointsData: { [key: string]: number }) {
    let totalPoints = 0;

    for (let player in pointsData) {
        totalPoints += pointsData[player];
    }

    return totalPoints;
}