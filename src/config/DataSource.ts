import { DataSource } from 'typeorm';
import 'dotenv/config';

export const dataSource = new DataSource({
  type: process.env.DB_TYPE as 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/entity/*.ts'],
  migrations: ['src/entity/*.ts'],
  logging: true,
  synchronize: true,
});
