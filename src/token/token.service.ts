import { AuthService } from './../auth/auth.service';
import { User } from './../users/entities/user.entity';
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './entities/token.entity';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token) private readonly repository: Repository<Token>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async save(hash: string, user: User) {
    this.repository.upsert({ hash, user }, ['user']);
  }

  async refreshToken(old_token: string) {
    const token = await this.repository.findOne({ hash: old_token });

    if (token) {
      const user = await this.repository.findOne(token.user);
      return this.authService.login(user);
    } else {
      return new HttpException(
        {
          message: `Invalid token`,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
