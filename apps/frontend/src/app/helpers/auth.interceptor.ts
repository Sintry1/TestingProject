import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginResponse } from '@omnihost/interfaces';
import { BehaviorSubject, catchError, EMPTY, finalize, Observable, switchMap, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

enum BehaviorSubjectEnum {
  INITIAL = 'initial',
  REFRESH_STARTED = 'refreshStarted',
  REFRESH_STOPPED = 'refreshStopped',
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  private refreshTokensInProgress = false;
  private refreshTokenSubject = new BehaviorSubject<BehaviorSubjectEnum>(
    BehaviorSubjectEnum.INITIAL
  );

  /**
   * Add the bearer token to the api request if the user is authenticated.
   * If the accessToken is expired, it will try to refresh it using the refreshToken.
   * If both are expired, it will log out the user and cancel the request.
   * @param req the request
   * @param next
   * @returns the original request with the authentication token
   */
  intercept(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: HttpRequest<any>,
    next: HttpHandler
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Observable<HttpEvent<any>> {
    // Check if the user is authenticated
    const accessInfo = this.authService.getAccessInfo();
    if (accessInfo == null) {
      // Do nothing since the request doesn't need to be authenticated
      return next.handle(request);
    }

    // Don't include the access token in the linode object storage requests
    if (request.url.includes('linodeobjects.com')) {
      return next.handle(request);
    }

    // If the request is to refresh the tokens, use the refresh token instead of the access token
    if (request.url.includes('/auth/refresh')) {
      // Check if the token is still valid. Logout if not
      if (accessInfo.refreshToken && this.authService.isJwtExpired(accessInfo.refreshToken)) {
        console.log('Your session has expired, redirecting you to the login page...');
        this.authService.logout();
        return EMPTY;
      }
      // Set the refresh token and continue the request
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessInfo.refreshToken}`,
        },
      });
      return next.handle(request);
    }

    // Check if there is a token refresh in progress. If there is, wait for it to finish
    if (this.refreshTokensInProgress) {
      return this.refreshTokenSubject.pipe(
        switchMap((behaviorStatus) => {
          if (behaviorStatus === BehaviorSubjectEnum.REFRESH_STOPPED) {
            return next.handle(this.addAccessToken(request));
          }

          return new Observable<HttpEvent<unknown>>();
        })
      );
    }

    // Check that the token is not expired, and perform a refresh if it is
    if (this.authService.isJwtExpired(accessInfo.accessToken)) {
      this.refreshTokensInProgress = true;
      this.refreshTokenSubject.next(BehaviorSubjectEnum.REFRESH_STARTED);
      return this.authService.refreshAccessInfo().pipe(
        tap((response: ILoginResponse) => {
          this.authService.saveAccessInfo(response);
        }),
        catchError((response) => {
          console.error(`Failed to refresh the access information, logging you out`, response);
          this.authService.logout();
          return EMPTY;
        }),
        switchMap(() => {
          this.refreshTokenSubject.next(BehaviorSubjectEnum.REFRESH_STOPPED);
          return next.handle(this.addAccessToken(request));
        }),
        finalize(() => (this.refreshTokensInProgress = false))
      );
    }

    // Access Token is valid - use it as the bearer token for authentication
    return next.handle(this.addAccessToken(request));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addAccessToken(request: HttpRequest<any>) {
    const accessInfo = this.authService.getAccessInfo();
    if (accessInfo == null) {
      // Do nothing since the request doesn't need to be authenticated
      return request;
    }

    // Check if there is manager access information present, and use it instead.
    const managerAccessInfo = this.authService.getManagerInfo();
    if (managerAccessInfo !== null) {
      // Do nothing since the request doesn't need to be authenticated
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${managerAccessInfo.accessToken}`,
        },
      });
    }

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessInfo.accessToken}`,
      },
    });
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
