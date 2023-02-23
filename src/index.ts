import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import 'dotenv/config';
import { dataSource } from './config/DataSource';
import router from './routes';

// create and setup express app
const app: Express = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false, limit: '5mb' }));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.TOKEN_SECRET as string,
    cookie: { maxAge: 3600000 * 2 }, // 2 hours
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cors());

// establish database connection
dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

// register routes
router(app);

// start express server
app.listen(PORT, () => {
  console.log(`[Server]: Server is running on port ${PORT}`);
});
