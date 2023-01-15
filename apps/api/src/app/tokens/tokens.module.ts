import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from '@omnihost/models';
import { TokenJobs } from './tokens.jobs';
import { TokensService } from './tokens.service';

@Module({
  imports: [TypeOrmModule.forFeature([Token])],
  providers: [TokensService, TokenJobs],
  exports: [TokensService],
})
export class TokensModule {}
