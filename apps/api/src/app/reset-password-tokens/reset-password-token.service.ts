import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IResetPasswordToken } from '@omnihost/interfaces';
import { ResetPasswordToken } from '@omnihost/models';
import { Repository } from 'typeorm';
import { SentryService } from '../utils/sentry.service';

@Injectable()
export class ResetPasswordTokensService {
  private readonly logger = new Logger(ResetPasswordTokensService.name);

  constructor(
    @InjectRepository(ResetPasswordToken)
    private readonly tokenRepo: Repository<ResetPasswordToken>
  ) {}

  /**
   * Find a reset password token based on the id.
   * @param tokenId the id of the token.
   * @returns token or throws an error.
   */
  async findByTokenId(tokenId: string): Promise<IResetPasswordToken> {
    return this.tokenRepo.findOneOrFail({
      where: { resetPasswordTokenId: tokenId },
    });
  }

  /**
   * Create and persist a reset password token.
   * @param userId id of the user associated with the token.
   * @param expiresAd when should the token expire.
   * @returns created token.
   */
  async create(userId: string, expiresAt: Date): Promise<IResetPasswordToken> {
    return this.tokenRepo.save({ userId, expiresAt });
  }

  /**
   * Mark the given token as completed.
   * @param tokenId the id of the token.
   * @returns updated token or throws an error.
   */
  async complete(tokenId: string): Promise<IResetPasswordToken> {
    try {
      const token = await this.findByTokenId(tokenId);
      token.completedAt = new Date();
      await this.tokenRepo.save(token);
      return token;
    } catch (error) {
      SentryService.log(
        'error',
        `An Unexpected error occurred while deleting a reset password token`,
        this.logger,
        error
      );
    }
  }
}
