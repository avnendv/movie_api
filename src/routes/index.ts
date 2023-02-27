import { Express } from 'express';
import { HelloWorld, UserController } from '../controllers';

import categoryRouter from './category';

import { errorHandle } from '../middlewares';
import { verifyToken } from '../middlewares/auth';

const router = (app: Express) => {
  // say hello world
  app.get('/', HelloWorld);

  // auth
  app.post('/api/register', UserController.register);
  app.post('/api/login', UserController.login);
  app.get('/api/profile', verifyToken, UserController.profile);
  app.post('/api/profile', verifyToken, UserController.profile);

  // category
  app.use('/api/category', categoryRouter);

  // handle errors
  app.use(errorHandle);
};

export default router;
