import { Pet } from './../../pet/entities/pet.entity';
import { User } from './../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdoptionDto {
  @ApiProperty({ example: 'P' })
  @IsString()
  @IsNotEmpty()
  situation: string;

  @ApiProperty({ example: 'id_user' })
  @IsString()
  @IsNotEmpty()
  user: User;

  @ApiProperty({ example: 'id_pet' })
  @IsString()
  @IsNotEmpty()
  pet: Pet;
}
