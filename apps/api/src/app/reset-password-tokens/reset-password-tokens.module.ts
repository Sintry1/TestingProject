import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResetPasswordToken } from '@omnihost/models';
import { ResetPasswordTokensService } from './reset-password-token.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResetPasswordToken])],
  providers: [ResetPasswordTokensService],
  exports: [ResetPasswordTokensService],
})
export class ResetPasswordTokensModule {}
