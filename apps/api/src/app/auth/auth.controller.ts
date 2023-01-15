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
import {
  IJwtInfo,
  LoginRequest,
  LoginResponse,
  SignupRequest,
} from '@omnihost/interfaces';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
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

  @Post('signup')
  @ApiOperation({
    summary: `Register a new user`,
  })
  @ApiOkResponse({ type: LoginResponse })
  async signup(@Body() signupRequestDto: SignupRequest) {
    return this.authService.signup(signupRequestDto);
  }

  @Post('logout')
  @HttpCode(202)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({
    summary: `Remove the the given user from the list of authenticated users`,
  })
  async logout(@JwtInfo() user: IJwtInfo) {
    this.authService.logout(user.token);
  }
}
