import { ErrorResponseIF } from '../models';
import logger from '../logs/winston';
import { NextFunction, Request, Response } from 'express';

export const errorHandle = (err: ErrorResponseIF, _req: Request, res: Response, _next: NextFunction) => {
  const { isLogger, ...errorData } = err;
  if (isLogger) {
    logger.error(JSON.stringify(errorData));
  }
  return res.json(errorData);
};
