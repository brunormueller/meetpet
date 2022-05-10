import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AutoLoginUserDto {
  @ApiProperty({
    example: 'dasiadadsihadsihabhfsdhbfdgbveweopwiggb@e3r2frwjnfnj',
  })
  @IsNotEmpty()
  @IsString()
  token: string;
}
