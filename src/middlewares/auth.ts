import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayloadIF, RequestIF } from '../models';

export const verifyToken = (req: RequestIF, res: Response, next: NextFunction) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string) as JwtPayloadIF;
    req.userId = decoded.id;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};
