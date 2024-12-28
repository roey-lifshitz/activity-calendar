import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap, catchError, throwError, Observable } from 'rxjs';
import { User } from '../types/user.type';
import { AuthState } from '../types/auth-state.type';
import { TokenService } from './toke.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly router: Router = inject(Router);
  private readonly tokenService: TokenService = inject(TokenService);

  private readonly apiUrl = '/api/auth';
  private state = signal<AuthState>({
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
  });

  public user = computed(() => this.state().user);
  public isAuthenticated = computed(() => Boolean(this.state().token));
  public loading = computed(() => this.state().loading);

  constructor() {
    this.loadUser();
  }

  private loadUser(): void {
    if (this.tokenService.getToken()) {
      this.getCurrentUser().subscribe({
        error: () => this.logout(),
      });
    }
  }

  public login(credentials: {
    email: string;
    password: string;
  }): Observable<{ user: User; token: string }> {
    this.state.update((s) => ({ ...s, loading: true }));

    return this.http
      .post<{ user: User; token: string }>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response) => {
          this.tokenService.setToken(response.token);
          this.state.update((s) => ({
            ...s,
            user: response.user,
            loading: false,
          }));
          this.router.navigate(['/home']);
        }),
        catchError((error) => {
          this.state.update((s) => ({ ...s, loading: false }));
          return throwError(() => error);
        })
      );
  }

  public register(userData: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }): Observable<{ user: User; token: string }> {
    this.state.update((s) => ({ ...s, loading: true }));

    return this.http
      .post<{ user: User; token: string }>(`${this.apiUrl}/register`, userData)
      .pipe(
        tap((response) => {
          this.tokenService.setToken(response.token);
          this.state.update((s) => ({
            ...s,
            user: response.user,
            loading: false,
          }));
          this.router.navigate(['/dashboard']);
        }),
        catchError((error) => {
          this.state.update((s) => ({ ...s, loading: false }));
          return throwError(() => error);
        })
      );
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/me`).pipe(
      tap((user) => {
        this.state.update((s) => ({ ...s, user }));
      })
    );
  }

  private logout(): void {
    this.tokenService.removeToken();
    this.state.update(() => ({
      user: null,
      loading: false,
      token: null,
    }));
    this.router.navigate(['/login']);
  }
}
