import path from 'path';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { User } from '../entity/User';

export const dataSource = new DataSource({
  type: process.env.DB_TYPE as 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: [path.join(__dirname, '..', 'migration', '*.ts')],
  logging: true,
  synchronize: true,
});
