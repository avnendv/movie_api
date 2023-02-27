import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Movie, User } from './';

@Entity()
export class MovieToUsers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int', default: 0 })
  rate!: number;

  @ManyToOne(() => Movie, (movie) => movie.movieToUsers)
  movie!: Movie;

  @ManyToOne(() => User, (user) => user.movieToUsers)
  user!: User;
}
