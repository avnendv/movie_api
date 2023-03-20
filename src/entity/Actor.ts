import { UserGender } from '@/models';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Movie } from './';

@Entity()
export class Actor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 30 })
  name!: string;

  @Column()
  slug!: string;

  @Column({
    type: 'enum',
    enum: UserGender,
    nullable: true,
  })
  gender!: UserGender;

  @Column({ type: 'date', nullable: true, default: null })
  birthday!: string;

  @Column({ nullable: true })
  avatar!: string;

  @Column({ nullable: true })
  address!: string;

  @Column({ type: 'text', nullable: true })
  descriptions!: string;

  @Column({ type: 'int', default: 0 })
  viewer!: number;

  @ManyToMany(() => Movie, (movie) => movie.categories)
  movies!: Movie[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}
