/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { IJwtInfo } from '@omnihost/interfaces';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokensService } from '../tokens/tokens.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);
  constructor(private tokensService: TokensService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any): Promise<IJwtInfo> {
    const token = req.get('Authorization').replace('Bearer', '').trim();
    try {
      await this.tokensService.findByToken(token);
      return {
        payload: {
          userId: payload.userId,
          email: payload.email,
          role: payload.role,
        },
        token,
      };
    } catch (error) {
      this.logger.warn(
        `Jwt validation failed since the token doesn't exist in the database`,
        token
      );
      throw new UnauthorizedException();
    }
  }
}
