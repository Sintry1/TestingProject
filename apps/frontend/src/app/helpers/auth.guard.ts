import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Role } from '@omnihost/interfaces';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRole: Role = route?.data['role'];

    // check if the user is authorized to view the given page
    // if no authentication and trying to access a protected page - redirect to login
    // if authenticated but wrong role - redirect to 404
    const accessInfo = this.authService.getAccessInfo();
    if (accessInfo === null) {
      this.router.navigate(['/login']);
      return false;
    }

    // If both tokens are expired - log the user out
    if (accessInfo.refreshToken && this.authService.isJwtExpired(accessInfo.refreshToken)) {
      console.warn('Your session has expired, logging you out');
      this.router.navigate(['/login']);
      return false;
    }

    // if no roles are required, pass the auth guard because the user is authorized
    if (!requiredRole) {
      return true;
    }
    const userRole: Role = accessInfo.user.role;
    const isAuthorized = userRole === requiredRole;
    if (!isAuthorized) {
      this.router.navigate(['/404']);
      return false;
    }
    return isAuthorized;
  }
}
