import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Movie, User } from './';

@Entity()
export class MovieEpisode extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'text' })
  videos!: string;

  @Column({ type: 'boolean', default: false })
  requireVip!: string;

  @ManyToOne(() => Movie, (movie) => movie.movieEpisodes)
  movie!: Movie;

  @ManyToOne(() => User, (user) => user.movieEpisodes)
  user!: User;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}
