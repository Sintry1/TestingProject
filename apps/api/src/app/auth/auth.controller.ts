/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IJwtInfo, LoginRequest, LoginResponse } from '@omnihost/interfaces';
import { AuthService } from './auth.service';
import { JwtAccessAuthGuard } from './jwt-auth-access.guard';
import { JwtRefreshAuthGuard } from './jwt-auth-refresh.guard';
import { JwtInfo } from './jwt-info.decorator';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
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
    this.authService.logout(jwt.token);
  }
}
