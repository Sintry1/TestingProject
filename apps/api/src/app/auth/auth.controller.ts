/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, HttpCode, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ForgotPasswordRequest,
  IJwtInfo,
  LoginRequest,
  LoginResponse,
  Role,
} from '@omnihost/interfaces';
import { AuthService } from './auth.service';
import { JwtAccessAuthGuard } from './jwt-auth-access.guard';
import { JwtRefreshAuthGuard } from './jwt-auth-refresh.guard';
import { JwtInfo } from './jwt-info.decorator';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({
    summary: `Log in as an existing user`,
  })
  @ApiOkResponse({ type: LoginResponse })
  @HttpCode(200)
  async login(@Request() req, @Body() LoginRequest: LoginRequest) {
    // uses the passport library logic to obtain the user
    this.logger.verbose(
      `Logging in user ${req.user.userId}${
        req.user.role === Role.manager ? '. User is a manager!' : ''
      }`
    );
    return this.authService.login(req.user);
  }

  // Commented out signup endpoint since we right now don't offer an ability to sign up
  // @Post('signup')
  // @ApiOperation({
  //   summary: `Register a new user`,
  // })
  // @ApiOkResponse({ type: LoginResponse })
  // async signup(@Body() signupRequestDto: SignupRequest) {
  //   return this.authService.signup(signupRequestDto);
  // }

  @Post('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  @ApiOperation({
    summary: `Obtain a new token pair and remove the old one`,
  })
  @ApiOkResponse({ type: LoginResponse })
  async refresh(@JwtInfo() jwt: IJwtInfo) {
    this.logger.verbose(`Refreshing the tokens for user ${jwt.payload.userId}`);
    this.authService.logout(jwt.token);
    return this.authService.login({
      email: jwt.payload.email,
      userId: jwt.payload.userId,
      role: jwt.payload.role,
      password: '',
    });
  }

  @Post('logout')
  @HttpCode(202)
  @UseGuards(JwtAccessAuthGuard)
  @ApiOperation({
    summary: `Remove the the given user from the list of authenticated users`,
  })
  async logout(@JwtInfo() jwt: IJwtInfo) {
    this.logger.verbose(`Logging out user ${jwt.payload.userId}`);
    this.authService.logout(jwt.token);
  }

  @Post('forgot-password')
  @HttpCode(202)
  @ApiOperation({
    summary: `Send a forgot password email to the given email`,
  })
  async forgotPassword(@Body() body: ForgotPasswordRequest) {
    this.logger.verbose(`Processing forgot password request for '${body.email}'`);
    this.authService.sendResetPasswordEmail(body.email);
    // Ignore the result of the password sending, and always respond as if the user exists and the sending succeeded
    return {
      message: 'Reset password email has been sent',
    };
  }
}
