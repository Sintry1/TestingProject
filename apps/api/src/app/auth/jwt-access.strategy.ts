/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { IJwtInfo } from '@omnihost/interfaces';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokensService } from '../tokens/tokens.service';
import { jwtConstants } from './constants';

@Injectable()
export class AccessTokenJwtStrategy extends PassportStrategy(Strategy, 'jwt-access') {
  private readonly logger = new Logger(AccessTokenJwtStrategy.name);
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
    // Check that the token is a access token
    if (payload.tokenType !== 'access') {
      this.logger.warn(`Auth failed: Refresh token was used for a Access Token-only endpoint`, token);
      throw new UnauthorizedException();
    }
    try {
      await this.tokensService.findByToken(token);
      return {
        payload: {
          userId: payload.userId,
          email: payload.email,
          role: payload.role,
          tokenType: payload.tokenType,
        },
        token,
      };
    } catch (error) {
      this.logger.warn(`Auth failed: the token doesn't exist in the database`, token);
      throw new UnauthorizedException();
    }
  }
}
