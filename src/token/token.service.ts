import { UserService } from './../users/users.service';
import { LoginUserDto } from './../users/dto/login-user.dto';
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
    private userService: UserService,
  ) {}

  async getUserByToken(token: string) {
    const objToken = await this.repository.findOne(
      { hash: token },
      { relations: ['user'] },
    );

    if (objToken) {
      const user: LoginUserDto = await this.userService.findOneById(
        objToken.user.id,
      );
      return user;
    } else {
      return null;
    }
  }

  async save(hash: string, user: User) {
    this.repository.upsert({ hash, user }, ['user']);
  }

  async refreshToken(old_token: string) {
    const user = await this.getUserByToken(old_token);

    if (user) {
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
