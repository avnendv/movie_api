import { ErrorResponseIF } from '@/models';
import logger from '@/logs/winston';
import { Request, Response } from 'express';

export const errorHandle = (err: ErrorResponseIF, _req: Request, res: Response) => {
  const { isLogger, ...errorData } = err;
  if (isLogger) {
    logger.error(JSON.stringify(errorData));
  }
  return res.json({ result: errorData.result, msg: errorData.msg });
};
