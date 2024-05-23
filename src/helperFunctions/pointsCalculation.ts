import { CricketMatchData } from "../business/Interfaces/cricketMatchData";
import { teamEntryData } from "../business/Interfaces/teamEntryData";

// Interface for storing player points
interface PlayerPoints {
    [playerName: string]: number;
}

const calculateBattingPoints = (runs: number, isBoundary: boolean, isSix: boolean, ballsFaced: number): number => {
    let battingPoints = runs;
    if (isBoundary) battingPoints += 1;
    if (isSix) battingPoints += 2;
    if (runs >= 30) battingPoints += 4;
    if (runs >= 50) battingPoints += 8;
    if (runs >= 100) battingPoints += 16;
    if (runs === 0) battingPoints -= 2; // points for dismissal on duck
    return battingPoints;
};

const calculateBowlingPoints = (wickets: number, isLBWorBowled: boolean, maidens: number): number => {
    let bowlingPoints = wickets * 25;
    if (isLBWorBowled) bowlingPoints += 8;
    if (wickets >= 3) bowlingPoints += 4;
    if (wickets >= 4) bowlingPoints += 8;
    if (wickets >= 5) bowlingPoints += 16;
    bowlingPoints += maidens * 12;
    return bowlingPoints;
};

const calculateFieldingPoints = (catches: number, stumpings: number, runOuts: number): number => {
    let fieldingPoints = catches * 8;
    fieldingPoints += stumpings * 12;
    fieldingPoints += runOuts * 6;
    return fieldingPoints;
};

// Calculate points
export const pointsCalculation = async (userTeam: teamEntryData, matchData: CricketMatchData[]): Promise<PlayerPoints> => {
    try {

        // Initialize points object
        const points: PlayerPoints = {};

        matchData.forEach((ball) => {
            const batsman: string = ball.batter;
            const bowler: string = ball.bowler;
            const fielder: string = ball.fielders_involved || '';

            // Checking player is in user's team
            if (userTeam.players.includes(batsman) || userTeam.players.includes(bowler) || userTeam.players.includes(fielder)) {
                // Initializing points for each player if not already initialized
                points[batsman] ??= 0;
                points[bowler] ??= 0;
                points[fielder] ??= 0;

                // batting points
                points[batsman] += calculateBattingPoints(ball.batsman_run, ball.non_boundary === 4, ball.non_boundary === 6, 1);

                // bowling points
                if (ball.isWicketDelivery) {
                    points[bowler] += calculateBowlingPoints(1, ball.kind === 'LBW' || ball.kind === 'Bowled', ball.kind === 'Maiden' ? 1 : 0);
                }

                // fielding points
                if (ball.fielders_involved !== 'NA') {
                    points[fielder] += calculateFieldingPoints(ball.fielders_involved.includes('Caught') ? 1 : 0, ball.kind === 'Stumping' ? 1 : 0, ball.kind === 'Run out' ? 1 : 0);
                }
            }
        });

        // points for captain and vice-captain
        points[userTeam.captain] *= 2;
        points[userTeam.viceCaptain] *= 1.5;

        // total points for each player
        Object.keys(points).forEach((player) => {
            points[player] = Math.round(points[player]);
        });

        return points;

    } catch (error) {
        console.error("Error calculating points:", error);
        throw error;
    }
};
