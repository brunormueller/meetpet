import { Pet } from './../../pet/entities/pet.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreatePhotoDto {
  @ApiProperty({ example: 'Lorem ' })
  @IsString()
  description: string;

  @ApiProperty({ example: 'image.jpg' })
  @IsString()
  photo: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  profile: boolean;

  @ApiProperty({ example: 'id_pet' })
  pet: Pet;
}
