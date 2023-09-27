import { NextFunction, Request, Response } from 'express';
import { errorResponse } from '@/utils';

export const HelloWorld = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(
      '<h1 style="text-align: center; margin-top: 100px;">Hello world!<br/>App build with Nodejs/Express + TypeScript.😜😜😜</h1>'
    );
  } catch (error) {
    next(errorResponse(error));
  }
};
