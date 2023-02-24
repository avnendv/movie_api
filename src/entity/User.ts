import { UserGender, UserStatus } from '../models';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  user_name!: string;

  @Column()
  password!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
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
  status!: UserGender;

  @Column({ type: 'date', nullable: true, default: null })
  expired_status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @DeleteDateColumn()
  deleted_at!: Date;
}
