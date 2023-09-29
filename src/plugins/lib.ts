import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import logger from 'morgan';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import { TOKEN_SECRET } from '@/config/env';

export const setupLibs = (app: Express) => {
  app.use(logger('dev'));
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: false, limit: '5mb' }));
  app.use(cookieParser());
  app.use(
    session({
      secret: TOKEN_SECRET as string,
      cookie: { maxAge: 3600000 * 2 }, // 2 hours
      resave: false,
      saveUninitialized: true,
    })
  );
  app.use(cors());
  app.use(helmet());
  app.use(compression());
};
