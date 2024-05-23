import { NextFunction, Request, Response } from 'express';
import getRankedTeams from '../../../helperFunctions/rankForWinnner';


export const teamResult = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(200)
        const teamList = await getRankedTeams()    


        res.json(teamList);
    } catch (error) {
        console.error(error);
        next(error)
    }
};