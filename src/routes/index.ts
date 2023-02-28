import { Express } from 'express';
import { HelloWorld, UserController } from '../controllers';

import actorRouter from './actor';
import categoryRouter from './category';
import movieRouter from './movie';
import movieEpisodeRouter from './movieEpisode';

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

  // actor
  app.use('/api/actor', actorRouter);

  // category
  app.use('/api/category', categoryRouter);

  // movie
  app.use('/api/movie', movieRouter);

  // movie
  app.use('/api/movie-episode', movieEpisodeRouter);

  // handle errors
  app.use(errorHandle);
};

export default router;
