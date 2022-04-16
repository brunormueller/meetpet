import { TokenService } from './../token/token.service';
import { UserService } from './../users/users.service';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
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

  async login(user_login: any) {
    const payload = { username: user_login.login, sub: user_login.userId };
    const token = this.jwtService.sign(payload);
    const user = await this.userService.findOneByLogin(user_login.login);

    this.tokenService.save(token, user);
    return {
      access_token_meet_pet: token,
    };
  }
}
