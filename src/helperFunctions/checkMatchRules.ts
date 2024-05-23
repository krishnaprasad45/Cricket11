type MatchRules = {
    WK: { min: number, max: number },
    BAT: { min: number, max: number },
    AR: { min: number, max: number },
    BWL: { min: number, max: number }
};

type Player = {
    Player: string,
    Team: string,
    Role: "WICKETKEEPER" | "BATTER" | "ALL-ROUNDER" | "BOWLER"
};

const matchRules: MatchRules = {
    WK: { min: 1, max: 8 },
    BAT: { min: 1, max: 8 },
    AR: { min: 1, max: 8 },
    BWL: { min: 1, max: 8 }
};

const roleMapping: { [key in Player['Role']]: keyof MatchRules } = {
    "WICKETKEEPER": "WK",
    "BATTER": "BAT",
    "ALL-ROUNDER": "AR",
    "BOWLER": "BWL"
};

export const checkMatchRules = async (selectedPlayers: string[], playersData: Player[]) => {
    try {
        // Initialize counters for each player type
        const playerCount: { [key in keyof MatchRules]: number } = {
            WK: 0,
            BAT: 0,
            AR: 0,
            BWL: 0
        };

        console.log("selectedPlayers:", selectedPlayers);
        console.log("AllPlayers:", playersData);

        // Iterate through selected players and count each player type
        for (const player of selectedPlayers) {
            const playerInfo = playersData.find(p => p.Player === player);
            if (playerInfo) {
                const roleKey = roleMapping[playerInfo.Role];
                playerCount[roleKey]++;
            }
        }
        console.log("playerCount:", playerCount);

        // Check if the player counts meet the match rules
        for (const type in matchRules) {
            const count = playerCount[type as keyof MatchRules];
            const { min, max } = matchRules[type as keyof MatchRules];
            if (count < min || count > max) {
                throw { statusCode: 400, message: `Invalid number of ${type} players selected. Minimum: ${min}, Maximum: ${max}` };
            }
        }

        // If all checks pass, return true
        return true;

    } catch (error) {
        console.error("Error in checkMatchRules:", error);
        throw error;
    }
};
