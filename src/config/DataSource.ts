import { DataSource } from 'typeorm';
import 'reflect-metadata';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } from './env';
import { User, Actor, Category, Movie, MovieEpisode, DateView, MovieToDateView, MovieToUsers } from '../entity';
import { GenerateMigration1677169173922 } from '../migration/1677169173922-generate-migration';

export const dataSource = new DataSource({
  type: DB_TYPE as 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [User, Actor, Category, Movie, MovieEpisode, DateView, MovieToDateView, MovieToUsers],
  migrations: [GenerateMigration1677169173922],
  logging: true,
  synchronize: false,
});
