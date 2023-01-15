/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(LocalStrategy.name);
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser({ email, password });
    if (!user) {
      this.logger.warn(`Login failed: email is not registered: ${email}`);
      throw new UnauthorizedException();
    }
    return user;
  }
}
