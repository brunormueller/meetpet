import { User } from './../../users/entities/user.entity';
import { Pet } from './../../pet/entities/pet.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('adoption')
export class Adoption {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Pet, (pet) => pet.adoption)
  pet_adoption: Adoption[];

  @OneToMany(() => User, (user) => user.adoption)
  user_adoption: User[];

  @Column({ name: 'situation', type: 'enum', enum: ['P', 'A', 'R'] })
  situation: string;
}
