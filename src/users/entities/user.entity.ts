import { Adoption } from './../../adoption/entities/adoption.entity';
import { Region } from './../../region/entities/region.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({
    name: 'type',
    type: 'enum',
    enum: ['A', 'R', 'C'],
    nullable: false,
  })
  type: string;

  @Column({ name: 'login', type: 'varchar', length: 100, nullable: false })
  login: string;

  @Column({ name: 'password', type: 'varchar', nullable: false })
  password: string;

  @Column({ name: 'photo', type: 'varchar' })
  photo: string;

  @OneToMany(() => Region, (region) => region.id)
  region: Region[];

  @OneToMany(() => Adoption, (adoption) => adoption.user)
  user_adoption: Adoption[];
}
