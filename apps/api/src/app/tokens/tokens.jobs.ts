import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TokensService } from './tokens.service';

@Injectable()
export class TokenJobs {
  constructor(private readonly tokensService: TokensService) {}

  @Cron(CronExpression.EVERY_DAY_AT_6AM)
  handleCron() {
    this.tokensService.deleteOldTokens();
  }
}
