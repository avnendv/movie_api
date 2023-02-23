import { Express, Request, Response } from 'express';

const router = (app: Express) => {
  app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
  });
};

export default router;
