import { BaseEntity, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { MovieToDateView } from './';

@Entity()
export class DateView extends BaseEntity {
  @PrimaryColumn({ type: 'date' })
  date!: string;

  @OneToMany(() => MovieToDateView, (movieToDateView) => movieToDateView.movie)
  movieToDateViews!: MovieToDateView[];
}
