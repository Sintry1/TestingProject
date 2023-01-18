import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  IAccessInfo,
  ILoginRequest,
  ILoginResponse,
  IManagerAccessInfo,
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
   * Perform a login request to the API.
   * @param params user credentials.
   * @returns observable of the API request.
   */
  login(params: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${env.apiUrl}/auth/login`, params);
  }

  /**
   * Perform a refresh access token request to the API.
   * @returns observable of the API request.
   */
  refreshAccessInfo(): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${env.apiUrl}/auth/refresh`, {});
  }

  /**
   * Remove the logged in user information from local storage and API.
   */
  public logout() {
    // Call the API and remove the token if it is still valid
    const accessInfo = this.getAccessInfo();
    if (accessInfo && !this.isJwtExpired(accessInfo.accessToken)) {
      this.http.post(`${env.apiUrl}/auth/logout`, {}).subscribe();
    }
    this.localStorageService.removeItem(LocalStorageVars.accessInfo);
    this.localStorageService.removeItem(LocalStorageVars.managerInfo);
    console.log('Redirecting to the login page...');
    this.router.navigate(['/login']);
  }

  /**
   * Save access information to local storage.
   * @param loginResponse access information returned by the API call.
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
   * Save access information of a manager user to local storage.
   * @param loginResponse access information returned by the API call.
   */
  public saveManagerInfo(loginResponse: ILoginResponse): void {
    this.localStorageService.removeItem(LocalStorageVars.managerInfo);
    this.localStorageService.setItem<IManagerAccessInfo>(LocalStorageVars.managerInfo, {
      accessToken: loginResponse.accessToken,
    });
  }

  /**
   * Get manager access information for authentication. The data comes from local storage.
   * @returns manager access information needed for authentication and authorization. Returns null if no information is found.
   */
  public getManagerInfo(): IManagerAccessInfo | null {
    const accessInfo = this.localStorageService.getItem<IManagerAccessInfo>(
      LocalStorageVars.managerInfo
    );
    if (accessInfo && accessInfo.getValue()) {
      return accessInfo.getValue();
    }
    return null;
  }

  /**
   * Remove the manager access information from local storage and API.
   */
  public removeManagerInfo(): void {
    // Call the API and remove the token if it is still valid
    const managerInfo = this.getManagerInfo();
    if (managerInfo && !this.isJwtExpired(managerInfo.accessToken)) {
      this.http.post(`${env.apiUrl}/auth/logout`, {}).subscribe();
    }
    // Remove the manager info from local storage
    this.localStorageService.removeItem(LocalStorageVars.managerInfo);
    console.log('Ending manager access...');
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
