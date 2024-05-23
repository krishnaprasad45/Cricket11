import { NextFunction, Request, Response } from 'express';
import { promises as fs } from 'fs';
import * as path from 'path';
import { validateTeam } from '../../../helperFunctions/validateTeam';
import { checkMatchRules } from '../../../helperFunctions/checkMatchRules';




export const readPlayersFile = async (req: Request, res: Response, next: NextFunction) => {
    try {

        console.log("readPlayersFile:3");

        const baseDir = path.resolve(__dirname, '../../../../');
        const filePath = path.join(baseDir, 'src', 'adapters', 'data-access', 'data', 'players.json');

        const data = await fs.readFile(filePath, 'utf-8');
        const playersList = JSON.parse(data);

        // Return the playersList explicitly
        return playersList;

    } catch (error) {
        console.error(error);
        next(error);
    }
};
export const addTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("addTeam:1");
        const { teamName, players, captain, viceCaptain } = req.body;
        const isValidated = validateTeam({ teamName, players, captain, viceCaptain });

        if (isValidated) {
            // Call readPlayersFile and await the result
            const allPlayersList = await readPlayersFile(req, res, next);

            // Use allPlayersList in checkMatchRules
            await checkMatchRules(players, allPlayersList);
            res.status(200).json({ message: "Team added successfully" });
        }

    } catch (error) {
        next(error);
    }
};