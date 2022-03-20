import { Breed } from './../../breeds/entities/breed.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePetDto {
  @ApiProperty({ example: 'Rex' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'ID_BREED' })
  @IsString()
  @IsNotEmpty()
  breed: Breed;

  @ApiProperty({ example: 'M' })
  genre: string;

  @ApiProperty({ example: '5' })
  @IsNumber()
  @IsNotEmpty()
  age: number;

  @ApiProperty({ example: 'P' })
  @IsString()
  @IsNotEmpty()
  size: string;
}
