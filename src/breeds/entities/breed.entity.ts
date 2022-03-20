import { Pet } from './../../pet/entities/pet.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'breeds' })
export class Breed extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'breed', type: 'varchar', length: '100' })
  name: string;

  @OneToMany(() => Pet, (pet) => pet.breed)
  pet: Pet[];
}
