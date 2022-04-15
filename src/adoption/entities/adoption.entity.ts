import { User } from './../../users/entities/user.entity';
import { Pet } from './../../pet/entities/pet.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('adoption')
export class Adoption {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pet, (pet) => pet.pet_adoption, {
    nullable: false,
    eager: true,
  })
  pet: Pet;

  @ManyToOne(() => User, (user) => user.user_adoption, {
    nullable: false,
    eager: true,
  })
  user: User;

  @Column({ name: 'situation', type: 'enum', enum: ['P', 'A', 'R'] })
  situation: string;
}
