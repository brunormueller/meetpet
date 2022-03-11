import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Luid' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'luid@email.com.br' })
  @IsNotEmpty()
  @IsString()
  username: string;
}
