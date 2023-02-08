/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  GetManagerAccessResponse,
  ILoginResponse,
  ISignupRequest,
  ISignupResponse,
  IUser,
  LoginRequest,
  Role,
} from '@omnihost/interfaces';
import { User } from '@omnihost/models';
import * as bcrypt from 'bcrypt';
import { MailService } from '../mail/mail.service';
import { ResetPasswordTokensService } from '../reset-password-tokens/reset-password-token.service';
import { TokensService } from '../tokens/tokens.service';
import { UsersService } from '../users/users.service';
import { getFrontendUrlFromEnv } from '../utils/links.utils';
import { SentryService } from '../utils/sentry.service';

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
    let refreshToken = null;
    refreshToken = this.jwtService.sign({ ...payload, tokenType: 'refresh' }, { expiresIn: '7d' });

    this.tokensService.create(accessToken, refreshToken);
    return {
      accessToken,
      refreshToken,
      role: user.role,
    };
  }

  async getManagerAccess(password: string): Promise<GetManagerAccessResponse> {
    const managerPassword = process.env.API_MANAGER_PASSWORD;
    if (password != managerPassword) {
      SentryService.log('warning', `An attempt was made to get manager access with wrong password`);
      throw new UnauthorizedException();
    }
    const payload = {
      email: '',
      userId: '',
      role: Role.manager,
    };
    const accessToken = this.jwtService.sign(
      { ...payload, tokenType: 'access' },
      { expiresIn: '30m' }
    );

    this.tokensService.create(accessToken);
    return {
      accessToken,
      role: Role.manager,
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
      SentryService.log(
        'warning',
        `An attempt was made to sign up using an already registered email: ${email}`,
        this.logger
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
    SentryService.log('info', `Registered new user with id ${user.userId}`, this.logger);
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
      SentryService.log(
        'warning',
        `Forgot password flow was triggered for a user that is not registered with email '${email}'`,
        this.logger
      );
      return false;
    }
    try {
      // Set the expiration date one day in the future
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);
      // Get the token and the url to be used by the email
      const token = await this.resetPasswordTokenService.create(user.userId, expirationDate);
      const resetPasswordLink =
        getFrontendUrlFromEnv() + `/reset-password?token=${token.resetPasswordTokenId}`;
      // Send the email
      return this.mailService.sendResetPasswordEmail({ email, resetPasswordLink });
    } catch (error) {
      SentryService.log(
        'error',
        `An error occurred while sending a reset password email`,
        this.logger,
        error
      );
    }
    return false;
  }

  /**
   * Check if the given reset password token is present in the database, not expired and not completed already.
   * @param token the token id.
   * @returns whether the token is valid or not.
   */
  async isValidResetPasswordToken(token: string): Promise<boolean> {
    try {
      const foundToken = await this.resetPasswordTokenService.findByTokenId(token);
      if (foundToken.completedAt) {
        SentryService.log(
          'warning',
          `Validation of reset password token failed: the token has already been used`,
          this.logger
        );
        return false;
      }
      if (foundToken.expiresAt < new Date()) {
        SentryService.log(
          'warning',
          `Validation of reset password token failed: the token is expired`,
          this.logger
        );
        return false;
      }
      return true;
    } catch (error) {
      SentryService.log(
        'warning',
        `Validation of reset password token failed: the token doesn't exist`,
        this.logger
      );
      return false;
    }
  }

  /**
   * Update the password of the user associated with the given reset password token.
   * @param token the reset password token id.
   * @param password the new password.
   */
  async updatePasswordByResetPasswordToken(token: string, password: string) {
    try {
      const foundToken = await this.resetPasswordTokenService.findByTokenId(token);
      const user = await this.usersService.findOneById(foundToken.userId);
      const hashedPassword = await this.encodePassword(password);
      await this.usersService.updatePassword(hashedPassword, user.userId);
      this.resetPasswordTokenService.complete(token);
      this.tokensService.deleteTokensByUserId(user.userId);
    } catch (error) {
      SentryService.log(
        'error',
        `An error occurred while updating the password of user with reset password token '${token}'`,
        this.logger,
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
