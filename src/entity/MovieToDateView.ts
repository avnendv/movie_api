import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateView, Movie } from './';

@Entity()
export class MovieToDateView extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int', default: 0 })
  viewer!: number;

  @ManyToOne(() => Movie, (movie) => movie.movieToDateViews)
  movie!: Movie;

  @ManyToOne(() => DateView, (dateView) => dateView.movieToDateViews)
  dateView!: DateView;
}
