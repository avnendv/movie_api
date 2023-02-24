import { ErrorResponseIF } from '../models';
import logger from '../logs/winston';
import { NextFunction, Request, Response } from 'express';

export const errorHandle = (err: ErrorResponseIF, req: Request, res: Response, next: NextFunction) => {
  const { isLogger, ...errorData } = err;
  if (err.isLogger) {
    logger.error(JSON.stringify(errorData));
  }
  return res.json(errorData);
};
