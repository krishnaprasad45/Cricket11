import { NextFunction, Request, Response } from 'express';


export const teamResult = async (req: Request, res: Response, next: NextFunction) => {
    const city = req.body.data;
    try {

        const data = {}
        res.json(data);
    } catch (error) {
        console.error(error);
        next(error)
    }
};