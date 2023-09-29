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
import { UserGender, UserStatus } from '../config/constants';
import { MovieToUsers } from './';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, length: 20 })
  user_name!: string;

  @Column({ type: 'text' })
  password!: string;

  @Column()
  full_name!: string;

  @Column({ unique: true, length: 50 })
  email!: string;

  @Column({ unique: true, nullable: true, length: 12 })
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

  @Column({ type: 'text', nullable: true, default: null })
  listLastMovieSeen!: string;

  @OneToMany(() => MovieToUsers, (movieToUser) => movieToUser.movie)
  movieToUsers!: MovieToUsers[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}
