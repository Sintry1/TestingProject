/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  ILoginResponse,
  ISignupRequest,
  ISignupResponse,
  IUser,
  LoginRequest,
  Role,
} from '@omnihost/interfaces';
import { User } from '@omnihost/models';
import * as bcrypt from 'bcrypt';
import { environment } from '../../environments/environment.prod';
import { MailService } from '../mail/mail.service';
import { ResetPasswordTokensService } from '../reset-password-tokens/reset-password-token.service';
import { TokensService } from '../tokens/tokens.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
    private tokensService: TokensService,
    private resetPasswordTokenService: ResetPasswordTokensService,
    private mailService: MailService
  ) {}

  /**
   * Verify that the the login attempt uses valid user credentials.
   * @param loginRequestDto user credentials.
   * @returns validated user information or null.
   */
  async validateUser(loginRequestDto: LoginRequest): Promise<any> {
    const { email, password } = loginRequestDto;
    let user: User;
    try {
      user = await this.usersService.findOne(email);
    } catch (exception) {
      // ignore the exception
    }
    if (user && (await this.compareHashes(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * Get a JWT access token for the given user \
   * This method is called internally by the authentication library.
   * @param user user for which the token gets generated.
   * @returns generated JWT.
   */
  async login(user: IUser): Promise<ILoginResponse> {
    const payload = {
      email: user.email,
      userId: user.userId,
      role: user.role,
    };
    const accessToken = this.jwtService.sign(
      { ...payload, tokenType: 'access' },
      { expiresIn: '30m' }
    );
    // Only create the refresh token for non-management users
    let refreshToken = null;
    if (user.role !== Role.manager) {
      refreshToken = this.jwtService.sign(
        { ...payload, tokenType: 'refresh' },
        { expiresIn: '7d' }
      );
    }

    this.tokensService.create(accessToken, refreshToken);
    return {
      accessToken,
      refreshToken,
      role: user.role,
    };
  }

  /**
   * Register a new user and hash their password.
   * @param signupRequestDto signup information.
   * @returns access token for the registered user.
   */
  async signup(signupRequestDto: ISignupRequest): Promise<ISignupResponse> {
    const { email, password } = signupRequestDto;
    let foundUser: User;
    try {
      foundUser = await this.usersService.findOne(email);
    } catch (exception) {
      // ignore the exception
    }
    if (foundUser) {
      this.logger.warn(
        `An attempt was made to sign up using an already registered email: ${email}`
      );
      throw new BadRequestException(
        `This email is already taken. Try adding some random digits to it 👍`
      );
    }
    const hashedPassword = await this.encodePassword(password);
    const user = await this.usersService.create({
      email: email,
      password: hashedPassword,
    });
    this.logger.log(`Registered new user with id ${user.userId}`);
    return await this.login(user);
  }

  /**
   * Removes a token pair associated with the given token.
   * @param token an access token.
   */
  async logout(token: string): Promise<void> {
    this.tokensService.deleteByToken(token);
  }

  /**
   * Check that the user exists, and if so send a reset password email.
   * @param email the email of the user.
   * @returns whether the email sending succeeded.
   */
  async sendResetPasswordEmail(email: string): Promise<boolean> {
    let user: IUser;
    try {
      // Verify that the user exists
      user = await this.usersService.findOne(email);
    } catch (error) {
      this.logger.warn(
        `Forgot password flow was triggered for a user that is not registered with email '${email}'`
      );
      return false;
    }
    try {
      // Set the expiration date one week in the future
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 7);
      // Get the token and the url to be used by the email
      const token = await this.resetPasswordTokenService.create(user.userId, expirationDate);
      const resetPasswordLink =
        (environment.production ? 'https://dev.omnihost.app' : 'http://localhost:4200') +
        `/reset-password?token=${token.resetPasswordTokenId}`;
      // Send the email
      return this.mailService.sendResetPasswordEmail({ email, resetPasswordLink });
    } catch (error) {
      this.logger.error(`An error occurred while sending a reset password email`, error);
    }
    return false;
  }

  async isValidResetPasswordToken(token: string): Promise<boolean> {
    try {
      const foundToken = await this.resetPasswordTokenService.findByTokenId(token);
      if (foundToken.completedAt) {
        this.logger.warn(
          `Validation fo reset password token failed: the token has already been used`
        );
        return false;
      }
      if (foundToken.expiresAt < new Date()) {
        this.logger.warn(`Validation fo reset password token failed: the token is expired`);
        return false;
      }
      return true;
    } catch (error) {
      this.logger.warn(`Validation fo reset password token failed: the token doesn't exist`);
      return false;
    }
  }

  async updatePasswordByToken(token: string, password: string) {
    try {
      const foundToken = await this.resetPasswordTokenService.findByTokenId(token);
      const user = await this.usersService.findOneById(foundToken.userId);
      const hashedPassword = await this.encodePassword(password);
      await this.usersService.updatePassword(hashedPassword, user.userId);
      this.resetPasswordTokenService.complete(token);
    } catch (error) {
      this.logger.error(
        `An error occurred while updating the password of user with reset password token '${token}'`,
        error
      );
      throw new InternalServerErrorException('An error occurred while updating the user password');
    }
  }

  /**
   * Hashes and salts the plain text password using bcrypt.
   * @param password plain text password to hash.
   * @returns encoded password.
   */
  async encodePassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  /**
   * Compares the plain text password and a hash to verify that they match.
   * @param password plain text password.
   * @param hash password hashed with bcrypt.
   * @returns whether the strings match.
   */
  async compareHashes(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
