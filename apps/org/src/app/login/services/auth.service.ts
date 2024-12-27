import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { tap, catchError, throwError, Observable } from 'rxjs';
import { User } from '../types/user.type';
import { AuthState } from '../types/auth-state.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly url = '/api/auth';
  private state = signal<AuthState>({
    user: null,
    token: localStorage.getItem('token'),
    loading: false,
  });

  public user = computed(() => this.state().user);
  public isAuthenticated = computed(() => Boolean(this.state().token));
  public loading = computed(() => this.state().loading);

  constructor(private http: HttpClient, private router: Router) {
    this.loadStoredUser();
  }

  private loadStoredUser(): void {
    if (this.state().token) {
      debugger;
      this.http
        .get<User>(`${this.url}/me`)
        .pipe(
          tap((user) => {
            this.state.update((s) => ({ ...s, user }));
          }),
          catchError((e) => {
            console.log(e);
            this.logout();
            return throwError(() => new Error('Invalid token'));
          })
        )
        .subscribe();
    }
  }

  public login(
    email: string,
    password: string
  ): Observable<{ token: string; user: User }> {
    this.state.update((s) => ({ ...s, loading: true }));
    return this.http
      .post<{ token: string; user: User }>(`${this.url}/login`, {
        email,
        password,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);

          this.state.update((s) => ({
            ...s,
            user: response.user,
            token: response.token,
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

  public logout(): void {
    localStorage.removeItem('token');
    this.state.update(() => ({
      user: null,
      token: null,
      loading: false,
    }));
    this.router.navigate(['/login']);
  }
}
