import { NextFunction, Request, Response } from 'express';
import { promises as fs } from 'fs';
import * as path from 'path';

export const readMatchResult = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const baseDir = path.resolve(__dirname, '../../');
        const filePath = path.join(baseDir, 'src', 'adapters', 'data-access', 'data', 'match.json');

        const data = await fs.readFile(filePath, 'utf-8');
        const matchResult = JSON.parse(data);

        // Return the matchResult explicitly
        return matchResult;

    } catch (error) {
        console.error(error);
        next(error);
    }
};