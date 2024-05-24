import { NextFunction, Request, Response } from 'express';
import { promises as fs } from 'fs';
import * as path from 'path';

export const readPlayersFile = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const baseDir = path.resolve(__dirname,'../../');
        const filePath = path.join(baseDir, 'src', 'adapters', 'data-access', 'data', 'players.json');

        const data = await fs.readFile(filePath, 'utf-8');
        const playersList = JSON.parse(data);

        return playersList;

    } catch (error) {
        console.error(error);
        next(error);
    }
};