import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TokensModule } from '../tokens/tokens.module';
import { UsersModule } from '../users/users.module';
import { AnonymousStrategy } from './anonymous.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { AccessTokenJwtStrategy } from './jwt-access.strategy';
import { RefreshTokenJwtStrategy } from './jwt-refresh.strategy';
import { LocalStrategy } from './local.strategy';
import { RolesGuard } from './roles.guards';

@Module({
  imports: [
    UsersModule,
    TokensModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    AccessTokenJwtStrategy,
    RefreshTokenJwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    AnonymousStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
