import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty({ example: 'region' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'name_region' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '-38.9484765' })
  @IsString()
  @IsNotEmpty()
  latitude: string;

  @ApiProperty({ example: '-68.0521139' })
  @IsString()
  @IsNotEmpty()
  longitude: string;
}
