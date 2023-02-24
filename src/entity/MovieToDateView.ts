import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateView } from './DateView';
import { Movie } from './Movie';

@Entity()
export class MovieToDateView extends BaseEntity {
  @PrimaryGeneratedColumn()
  movieToDateViewId!: number;

  @Column({ type: 'int', default: 0 })
  viewer!: number;

  @ManyToOne(() => Movie, (movie) => movie.movieToDateViews)
  movie!: Movie;

  @ManyToOne(() => DateView, (dateView) => dateView.movieToDateViews)
  dateView!: DateView;
}
