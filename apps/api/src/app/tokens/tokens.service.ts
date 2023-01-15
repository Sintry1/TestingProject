import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from '@omnihost/models';
import { Repository } from 'typeorm';

@Injectable()
export class TokensService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepo: Repository<Token>
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
    const foundPair = await this.findByToken(token);
    this.tokenRepo.remove(foundPair);
  }
}
