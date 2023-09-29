import { Express } from 'express';
import { setupLibs } from './lib';
import { setupDb } from './db';
import router from '@/routes';
import swagger from '@/swagger';

export const setupApp = (app: Express) => {
  // setup libs
  setupLibs(app);

  // establish database connection
  setupDb();

  // register routes
  router(app);

  // register swagger
  swagger(app);
};
