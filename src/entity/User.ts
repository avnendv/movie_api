import { UserGender, UserStatus } from '../models';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MovieEpisode } from './MovieEpisode';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, length: 20 })
  user_name!: string;

  @Column({ length: 20 })
  password!: string;

  @Column()
  full_name!: string;

  @Column({ unique: true, length: 50 })
  email!: string;

  @Column({ unique: true, length: 12 })
  phone!: string;

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

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.NORMAL,
  })
  status!: UserStatus;

  @Column({ type: 'date', nullable: true, default: null })
  expired_status!: string;

  @OneToMany(() => MovieEpisode, (movieEpisode) => movieEpisode.user)
  movieEpisodes!: MovieEpisode[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}
