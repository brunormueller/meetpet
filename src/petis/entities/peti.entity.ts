import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';

@Entity('pet')
export class Peti {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
