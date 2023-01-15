import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  IAccessInfo,
  ILoginRequest,
  ILoginResponse,
  LocalStorageVars,
  Role,
} from '@omnihost/interfaces';
import { LocalStorageService } from '@omnihost/local-storage';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

interface IAccessTokenPayload {
  userId: string;
  role: Role;
  email: string;
  tokenType: string;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  /**
   * Perform a login request to the API
   * @param params user credentials
   * @returns observable of the API request
   */
  login(params: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${env.apiUrl}/auth/login`, params);
  }

  /**
   * Remove the logged in user information from local storage and API
   */
  public async logout() {
    this.http.post(`${env.apiUrl}/auth/logout`, {}).subscribe();
    this.localStorageService.removeItem(LocalStorageVars.accessInfo);
    console.log('Redirecting to the login page...');
    this.router.navigate(['/login']);
  }

  /**
   * Save access information to local storage
   * @param accessInfo information used for authentication like the access token.
   */
  public saveAccessInfo(loginResponse: ILoginResponse): void {
    this.localStorageService.removeItem(LocalStorageVars.accessInfo);
    this.localStorageService.setItem<IAccessInfo>(LocalStorageVars.accessInfo, {
      user: jwt_decode<IAccessTokenPayload>(loginResponse.accessToken),
      accessToken: loginResponse.accessToken,
      refreshToken: loginResponse.refreshToken,
    });
  }

  /**
   * Get user information for authentication. The data comes from local storage.
   * @returns user information needed for authentication and authorization. Returns null if no information is found.
   */
  public getAccessInfo(): IAccessInfo | null {
    const accessInfo = this.localStorageService.getItem<IAccessInfo>(LocalStorageVars.accessInfo);
    if (accessInfo && accessInfo.getValue()) {
      return accessInfo.getValue();
    }
    return null;
  }

  /**
   * Validates if the given JWT is expired
   * @param token JWT token
   * @returns whether it is expired or not
   */
  public isJwtExpired(token: string): boolean {
    const expiry = jwt_decode<IAccessTokenPayload>(token).exp; // this.decodeJwt(token).exp;
    if (!expiry) {
      return false;
    }
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }
}
