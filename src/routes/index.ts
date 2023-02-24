import { HelloWorld } from '../controllers/HelloWorldController';
import { Express } from 'express';
import { errorHandle } from '../middlewares';

const router = (app: Express) => {
  app.get('/', HelloWorld);

  app.use(errorHandle);
};

export default router;
