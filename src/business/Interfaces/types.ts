export type MatchRules = {
    WK: { min: number, max: number },
    BAT: { min: number, max: number },
    AR: { min: number, max: number },
    BWL: { min: number, max: number }
};

export type Player = {
    Player: string,
    Team: string,
    Role: "WICKETKEEPER" | "BATTER" | "ALL-ROUNDER" | "BOWLER"
};