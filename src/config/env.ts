import 'dotenv/config';

export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'TOKEN_SECRET';
export const TOKEN_LIFE = process.env.TOKEN_LIFE || '7d';
export const DB_TYPE = process.env.DB_TYPE || 'mysql';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USERNAME = process.env.DB_USERNAME || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_NAME = process.env.DB_NAME || 'db';
export const MAIL_SMTP = process.env.MAIL_SMTP || 'smtp.gmail.com';
export const MAIL_PORT = process.env.MAIL_PORT || '465';
export const MAIL_USER = process.env.MAIL_USER || '';
export const MAIL_PASS = process.env.MAIL_PASS || '';
