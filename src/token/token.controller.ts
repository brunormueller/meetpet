import { TokenService } from './token.service';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Body, Put } from '@nestjs/common';
import { RefreshTokenDto } from './dto/refresh.token.dto';

@ApiTags('Token')
@Controller('tokens')
export class TokenController {
  constructor(private tokeService: TokenService) {}

  @Put('refresh')
  async refreshToken(@Body() data: RefreshTokenDto) {
    return this.tokeService.refreshToken(data.old_token);
  }
}
