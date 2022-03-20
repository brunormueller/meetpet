import { Pet } from './../../pet/entities/pet.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'photos' })
export class Photo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'description', type: 'varchar', length: '200' })
  description: string;

  @Column({ name: 'profile', type: 'boolean', default: false })
  profile: boolean;

  @Column({ name: 'photo', type: 'varchar' })
  photo: string;

  @ManyToOne(() => Pet, (pet) => pet.photo, { nullable: false, eager: true })
  pet: Pet;
}
