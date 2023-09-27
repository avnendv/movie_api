import { NextFunction, Request, Response } from 'express';
import logger from '@/logs/winston';
import { ErrorResponseIF } from '@/models';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandle = (err: ErrorResponseIF, _req: Request, res: Response, _next: NextFunction) => {
  const { isLogger, ...errorData } = err;
  if (isLogger) {
    logger.error(JSON.stringify(errorData));
  }
  return res.json({ result: errorData.result, msg: errorData.msg });
};
