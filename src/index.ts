import 'dotenv/config';
import express, { Express } from 'express';
import 'module-alias/register';
import { setupApp } from './plugins';
import { PORT } from './config/env';

// create and setup express app
const app: Express = express();

setupApp(app);

// start express server
app.listen(PORT, () => {
  console.log(`[Server]: Server is running on port ${PORT}`);
});
