import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from '@omnihost/models';
import { jwtConstants } from '../auth/constants';
import { TokenJobs } from './tokens.jobs';
import { TokensService } from './tokens.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Token]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  providers: [TokensService, TokenJobs],
  exports: [TokensService],
})
export class TokensModule {}
