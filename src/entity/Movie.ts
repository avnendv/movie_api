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
import { Actor, Category, MovieEpisode, MovieToDateView, MovieToUsers } from './';

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

  @Column()
  country!: string;

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

  @OneToMany(() => MovieToUsers, (movieToUser) => movieToUser.movie)
  movieToUsers!: MovieToUsers[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}
