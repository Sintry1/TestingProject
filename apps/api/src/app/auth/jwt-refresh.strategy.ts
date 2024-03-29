/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { IJwtInfo, IJwtPayload } from '@omnihost/interfaces';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokensService } from '../tokens/tokens.service';
import { SentryService } from '../utils/sentry.service';
import { jwtConstants } from './constants';

@Injectable()
export class RefreshTokenJwtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  private readonly logger = new Logger(RefreshTokenJwtStrategy.name);
  constructor(private tokensService: TokensService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: IJwtPayload): Promise<IJwtInfo> {
    const token = req.get('Authorization').replace('Bearer', '').trim();
    // Check that the token is a refresh token
    if (payload.tokenType !== 'refresh') {
      SentryService.log(
        'warning',
        `Auth failed: Access token was used for a Refresh Token-only endpoint`,
        this.logger,
        token
      );
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
      SentryService.log(
        'warning',
        `Auth failed: token doesn't exist in the database`,
        this.logger,
        token
      );
      throw new UnauthorizedException('Unauthorized - please log in again');
    }
  }
}
