import { Request, Response, NextFunction } from 'express';

const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  console.log('Request Body:', req.body);
  next();
};

export default loggingMiddleware;