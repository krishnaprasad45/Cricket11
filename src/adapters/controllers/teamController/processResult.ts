import { NextFunction, Request, Response } from 'express';
import { findUserById, updatePoints } from '../../data-access/repositories/teamRepository';
import { readMatchResult } from '../../../helperFunctions/readMatchResult';
import { pointsCalculation } from '../../../helperFunctions/pointsCalculation';
import { calculateTotalPoints } from '../../../helperFunctions/findTotalPoints';

export const processResult = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userIdStr = req.query.userId
        const userId = Number(userIdStr)
        const userData = await findUserById(userId)
        const matchResults = await readMatchResult(req, res, next)
        if (userData) {
            const pointsList = await pointsCalculation(userData, matchResults);
            const totalPoints = calculateTotalPoints(pointsList)
            const isFieldUpdated = await updatePoints({ userId, pointsList, totalPoints })
            if (isFieldUpdated) res.status(200).json({ message: "Points updated successfully" });

        }
    } catch (error) {
        console.error(error);
        next(error)
    }
};
