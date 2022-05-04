import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ example: 'luid@email.com.br' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: '123qweasdzxc' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
