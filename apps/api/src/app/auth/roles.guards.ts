import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@omnihost/interfaces';
import { UsersService } from '../users/users.service';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);
  constructor(
    private reflector: Reflector,
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // skip if there is no required roles
    if (!requiredRoles) {
      return true;
    }
    const { headers } = context.switchToHttp().getRequest();

    // validate that the request contains the jwt access token
    if (!headers || !headers.authorization) {
      this.logger.warn(`Auth failed: request is missing the access token`);
      return false;
    }

    // extract information from the access token
    const jwt = <{ email?: string; id?: string; iat?: number; exp?: number }>(
      this.jwtService.decode(headers.authorization.replace('Bearer ', ''))
    );

    // validate that the token contains an email
    if (!jwt) {
      this.logger.warn(`Auth failed: jwt body is missing`);
      return false;
    }

    if (!jwt.email) {
      this.logger.warn(`Auth failed: jwt body is missing the email`);
      return false;
    }

    // fetch a user based on the email and check their role
    const user = await this.usersService.findOne(jwt.email);
    if (!user) {
      this.logger.warn(`Auth failed: user doesn't exist`);
      return false;
    }
    if (requiredRoles.some((role) => user.role?.includes(role))) {
      return true;
    }
    this.logger.warn(
      `Auth failed: user does not have one of the required roles: [${requiredRoles}]. User role: '${user.role}'`
    );
    return false;
  }
}
