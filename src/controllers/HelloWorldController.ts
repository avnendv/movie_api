import { NextFunction, Request, Response } from 'express';

export const HelloWorld = (_req: Request, res: Response, _next: NextFunction) => {
  res.send(
    '<h1 style="text-align: center; margin-top: 100px;">Hello world!<br/>App build with Nodejs/Express + TypeScript.😜😜😜</h1>'
  );
};
