import { User } from './../../users/entities/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'tokens' })
export class Token extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'hash', type: 'varchar' })
  hash: string;

  @OneToOne(() => User, (user) => user.user_token)
  @JoinColumn()
  user: User;
}
