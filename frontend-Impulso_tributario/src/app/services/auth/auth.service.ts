import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginResponse } from '../../shared/interfaces/login-response.interface';
import { LoginRequest } from '../../shared/interfaces/login-request.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly authUrl = `${environment.backendUrl}/auth`;
  private readonly tokenKey = 'it_token';

  /** POST /auth/login */
  login(request: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.authUrl}/login`, request)
      .pipe(tap((res) => sessionStorage.setItem(this.tokenKey, res.token)));
  }

  get token(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  logout(): void {
    sessionStorage.removeItem(this.tokenKey);
  }
}
