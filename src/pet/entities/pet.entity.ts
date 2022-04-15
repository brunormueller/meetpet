import { Adoption } from './../../adoption/entities/adoption.entity';
import { Photo } from './../../photos/entities/photo.entity';
import { Breed } from './../../breeds/entities/breed.entity';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'pets' })
export class Pet extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar', length: '100' })
  name: string;

  @Column({ name: 'genre', type: 'enum', enum: ['M', 'F'] })
  genre: string;

  @Column({ name: 'age', type: 'int' })
  age: number;

  @Column({ name: 'size', type: 'enum', enum: ['P', 'M', 'G'] })
  size: string;

  @OneToMany(() => Photo, (photo) => photo.photo)
  photo: Photo[];

  @ManyToOne(() => Breed, (breed) => breed.pet, {
    nullable: false,
    eager: true,
  })
  breed: Breed;

  @OneToMany(() => Adoption, (adoption) => adoption.user)
  adoption: Adoption[];

  @OneToMany(() => Adoption, (adoption) => adoption.pet)
  pet_adoption: Adoption[];
}
