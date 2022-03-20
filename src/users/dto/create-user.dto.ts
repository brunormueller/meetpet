import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Luid' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'A' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: 'luid@email.com.br' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: '123qweasdzxc' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'image.jpg' })
  @IsString()
  @IsNotEmpty()
  photo: string;
}
