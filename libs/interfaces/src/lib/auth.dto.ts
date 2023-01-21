import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { IsNotEmpty, MaxLength } from 'class-validator';
import {
  IForgotPasswordRequest,
  ILoginRequest,
  ILoginResponse,
  IResetPasswordRequest,
  ISignupRequest,
} from './auth.interface';
import { Role } from './role.enum';

export class LoginRequest implements ILoginRequest {
  @ApiModelProperty()
  @IsNotEmpty()
  @MaxLength(254)
  email!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @MaxLength(120)
  password!: string;
}

export class SignupRequest implements ISignupRequest {
  @ApiModelProperty()
  @IsNotEmpty()
  @MaxLength(254)
  email!: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @MaxLength(120)
  password!: string;
}

export class ForgotPasswordRequest implements IForgotPasswordRequest {
  @ApiModelProperty()
  @IsNotEmpty()
  @MaxLength(254)
  email!: string;
}

export class ResetPasswordRequest implements IResetPasswordRequest {
  @ApiModelProperty()
  @IsNotEmpty()
  @MaxLength(120)
  password!: string;
}

export class LoginResponse implements ILoginResponse {
  @ApiModelProperty({
    description: 'JWT access token',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwic3ViIjoiYjIzZDA2YmYtMzhmNi00Njk1LTkzNjEtMTE5YTVjMWU3ODQ5IiwiaWF0IjoxNjUwNDk3MTc3LCJleHAiOjE2NTA1ODM1Nzd9.xQy16DAl1zlszQdCQZEbNoadOOdxtAAegShlkd2PF-I',
  })
  accessToken!: string;

  @ApiModelProperty({ type: 'enum', enum: Object.keys(Role) })
  role!: Role;
}
