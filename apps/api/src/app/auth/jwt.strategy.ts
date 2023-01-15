/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { IJwtInfo } from '@omnihost/interfaces';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any): Promise<IJwtInfo> {
    const token = req.get('Authorization').replace('Bearer', '').trim();
    return {
      payload: {
        userId: payload.userId,
        email: payload.email,
        role: payload.role,
      },
      token,
    };
  }
}
