import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import logger from 'morgan';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { NODE_ENV, TOKEN_SECRET } from '@/config/env';
import { A_SECOND } from '@/config/constants';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  // store: ... , // Use an external store for more precise rate limiting
});

export const setupLibs = (app: Express) => {
  app.use(logger('dev'));
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: false, limit: '5mb' }));
  app.use(cookieParser());
  app.use(
    session({
      secret: TOKEN_SECRET as string,
      cookie: { maxAge: 2 * 60 * 60 * A_SECOND }, // 2 hours
      resave: false,
      saveUninitialized: true,
    })
  );
  app.use(cors());
  app.use(helmet());
  app.use(compression());

  // Apply the rate limiting middleware to all requests on production
  if (NODE_ENV === 'production') app.use(limiter);
};
