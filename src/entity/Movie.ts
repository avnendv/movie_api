import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Actor } from './Actor';
import { Category } from './Category';
import { MovieEpisode } from './MovieEpisode';
import { MovieToDateView } from './MovieToDateView';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  slug!: string;

  @Column({ nullable: true })
  name_en!: string;

  @Column({ type: 'text', nullable: true })
  descriptions!: string;

  @OneToMany(() => MovieEpisode, (movieEpisode) => movieEpisode.movie)
  movieEpisodes!: MovieEpisode[];

  @ManyToMany(() => Category, (category) => category.movies)
  @JoinTable()
  categories!: Category[];

  @ManyToMany(() => Actor, (actor) => actor.movies)
  @JoinTable()
  actors!: Actor[];

  @OneToMany(() => MovieToDateView, (movieToDateView) => movieToDateView.movie)
  movieToDateViews!: MovieToDateView[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}
