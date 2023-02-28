import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { errorResponse } from '../utils';
import { JwtPayloadIF, MessagePayLoad, RequestIF } from '../models';

export const verifyToken = (req: RequestIF, _res: Response, next: NextFunction) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  try {
    if (!token) {
      throw { msg: 'A token is required for authentication!' };
    }
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET as string) as JwtPayloadIF;
    req.userId = decoded.id;
  } catch (error) {
    const err = error as MessagePayLoad;
    if (!err.msg) {
      err.msg = 'Invalid Token!';
    }
    next(errorResponse(err));
  }
  return next();
};

export const roles = (roles: number[]) => {
  return function (req: RequestIF, _res: Response, next: NextFunction) {
    try {
      if (!req.userId) {
        throw { msg: 'Invalid user!' };
      }
      const role = 1; // role of user
      if (!roles.includes(role)) {
        throw { msg: 'Permission not allowed!' };
      }
      return next();
    } catch (error) {
      next(errorResponse(error));
    }
  };
};
