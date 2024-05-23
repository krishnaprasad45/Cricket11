import { NextFunction, Request, Response } from 'express';

import { validateTeam } from '../../../helperFunctions/validateTeam';
import { checkMatchRules } from '../../../helperFunctions/checkMatchRules';
import { saveTeamEntry } from '../../data-access/repositories/teamRepository';
import { generateUniqueUserId } from '../../../helperFunctions/generateUserId';
import { readPlayersFile } from '../../../helperFunctions/readPlayersList';

export const addTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teamName, players, captain, viceCaptain } = req.body;
        const userId: number | undefined = await generateUniqueUserId();
        const isValidated = validateTeam({ teamName, players, captain, viceCaptain });

        if (isValidated) {
            
            const allPlayersList = await readPlayersFile(req, res, next);
            await checkMatchRules(players, allPlayersList);
            await saveTeamEntry({ userId, teamName, players, captain, viceCaptain })
            res.status(200).json({ message: "Team added successfully" });
        }

    } catch (error) {
        next(error);
    }
};