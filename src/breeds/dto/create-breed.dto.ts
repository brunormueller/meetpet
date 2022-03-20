import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBreedDto {
  @ApiProperty({ example: 'dog' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
