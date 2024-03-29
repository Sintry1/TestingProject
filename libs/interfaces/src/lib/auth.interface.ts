import { Role } from './role.enum';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken?: string;
  role: Role;
}

export interface ISignupRequest {
  email: string;
  password: string;
}

export interface ISignupResponse {
  accessToken: string;
  role: Role;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IResetPasswordRequest {
  password: string;
}

export interface IJwtInfo {
  payload: IJwtPayload;
  token: string;
}

export interface IJwtPayload {
  userId: string;
  role: Role;
  email: string;
  tokenType: string;
}

export interface IAccessInfo {
  user: {
    userId: string;
    email: string;
    role: Role;
  };
  accessToken: string;
  refreshToken?: string;
}
export interface IManagerAccessInfo {
  accessToken: string;
}

export interface IAuthUser {
  accessToken: string;
  roles: string[];
}
