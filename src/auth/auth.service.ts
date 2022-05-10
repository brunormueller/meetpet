import { LoginUserDto } from './../users/dto/login-user.dto';
import { AutoLoginUserDto } from './../users/dto/auto-login-user.dto';
import { TokenService } from './../token/token.service';
import { UserService } from './../users/users.service';
import {
  Inject,
  Injectable,
  forwardRef,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @Inject(forwardRef(() => TokenService))
    private tokenService: TokenService,
  ) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByLogin(username);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { ...result } = user;
      result.password = undefined;
      return result;
    }

    return null;
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userService.findOneByLogin(loginUserDto.login);
    const payload = { username: user.login, sub: user.id };
    const token = this.jwtService.sign(payload);

    this.tokenService.save(token, user);
    return {
      access_token_meet_pet: token,
    };
  }

  async autoLogin(autoLoginUserDto: AutoLoginUserDto) {
    const user = await this.tokenService.getUserByToken(autoLoginUserDto.token);
    console.log(user);
    if (user) {
      return this.login(user);
    } else {
      return new HttpException(
        {
          message: 'Não autorizado',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
