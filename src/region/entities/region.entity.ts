import { User } from './../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('region')
export class Region {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ name: 'longitude', type: 'varchar', nullable: false })
  longitude: string;

  @Column({ name: 'latitude', type: 'varchar', nullable: false })
  latitude: string;

  @ManyToOne(() => User, (user) => user.region)
  user: User;
}
