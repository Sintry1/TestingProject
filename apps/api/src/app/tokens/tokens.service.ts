import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '@omnihost/interfaces';
import { Token } from '@omnihost/models';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class TokensService {
  private readonly logger = new Logger(TokensService.name);

  constructor(
    @InjectRepository(Token)
    private readonly tokenRepo: Repository<Token>,
    private jwtService: JwtService
  ) {}

  /**
   * Find a token pair based on one of the tokens.
   * @param token access or refresh token.
   * @returns token pair or throws an error.
   */
  async findByToken(token: string): Promise<Token> {
    return this.tokenRepo.findOneOrFail({
      where: [{ accessToken: token }, { refreshToken: token }],
    });
  }

  /**
   * Create and persist a token pair.
   * @param accessToken the access token.
   * @param refreshToken optional refresh token.
   * @returns created token pair.
   */
  async create(accessToken: string, refreshToken?: string): Promise<Token> {
    return this.tokenRepo.save({ accessToken, refreshToken });
  }

  /**
   * Remove a token pair with the given token.
   * @param token an access token or a refresh token.
   */
  async deleteByToken(token: string): Promise<void> {
    try {
      const foundPair = await this.findByToken(token);
      this.tokenRepo.remove(foundPair);
    } catch (error) {
      console.error(`An Unexpected error occurred while deleting a token`, error);
    }
  }

  /**
   * Remove a all token pairs of the given user
   * @param userId id of the user to de-authenticate.
   */
  async deleteTokensByUserId(userId: string): Promise<void> {
    try {
      const tokens = await this.tokenRepo.find();
      const userTokens = tokens.filter((token) => {
        // extract information from the access token
        const jwt = <{ email?: string; userId?: string; role?: Role; iat?: number; exp?: number }>(
          this.jwtService.decode(token.accessToken)
        );
        if (jwt.userId === userId) return token;
      });
      this.logger.verbose(`Deleted ${userTokens.length} token pairs of user '${userId}'`);
      this.tokenRepo.remove(userTokens);
    } catch (error) {
      console.error(`An Unexpected error occurred while deleting a token`, error);
    }
  }

  async deleteOldTokens(): Promise<void> {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const foundTokens = await this.tokenRepo.find({
      where: { createdAt: MoreThan(nextWeek) },
    });
    if (foundTokens.length > 0) {
      this.logger.log(`Deleting ${foundTokens.length} expired tokens`);
      this.tokenRepo.remove(foundTokens);
    }
  }
}
