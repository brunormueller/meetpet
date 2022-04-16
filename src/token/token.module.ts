import { TokenController } from './token.controller';
import { UserModule } from './../users/users.module';
import { Token } from './entities/token.entity';
import { AuthModule } from './../auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenService } from './token.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Token]),
    forwardRef(() => AuthModule),
    UserModule,
  ],
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
