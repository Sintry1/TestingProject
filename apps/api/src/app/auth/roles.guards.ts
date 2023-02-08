import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload, Role } from '@omnihost/interfaces';
import { UsersService } from '../users/users.service';
import { SentryService } from '../utils/sentry.service';
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
      SentryService.log('warning', `Auth failed: request is missing the access token`, this.logger);
      throw new UnauthorizedException();
    }

    // extract information from the access token
    const jwt = <IJwtPayload>this.jwtService.decode(headers.authorization.replace('Bearer ', ''));

    // validate that the token contains an email
    if (!jwt) {
      SentryService.log('warning', `Auth failed: invalid or missing JWT`, this.logger);
      throw new UnauthorizedException();
    }

    // If the JWT is for role: manager, skip the rest of the validation
    if (jwt.role == Role.manager) {
      return true;
    }

    // Check that there is an associated registered user
    if (!jwt.email) {
      SentryService.log('warning', `Auth failed: JWT body is missing the email`, this.logger);
      return false;
    }

    // fetch a user based on the email and check their role
    const user = await this.usersService.findOne(jwt.email);
    if (!user) {
      SentryService.log('warning', `Auth failed: user doesn't exist`, this.logger);
      return false;
    }
    if (requiredRoles.some((role) => user.role?.includes(role))) {
      return true;
    }
    SentryService.log(
      'warning',
      `Auth failed: user does not have one of the required roles`,
      this.logger,
      { requiredRoles, providedRole: user.role }
    );
    return false;
  }
}
