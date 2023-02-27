import { DataSource } from 'typeorm';
import 'dotenv/config';
import { User, Actor, Category, Movie, MovieEpisode, DateView, MovieToDateView, MovieToUsers } from '../entity';
import { generateMigration1677169173922 } from '../migration/1677169173922-generate-migration';

export const dataSource = new DataSource({
  type: process.env.DB_TYPE as 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Actor, Category, Movie, MovieEpisode, DateView, MovieToDateView, MovieToUsers],
  migrations: [generateMigration1677169173922],
  logging: true,
  synchronize: false,
});
