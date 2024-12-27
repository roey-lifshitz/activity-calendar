import { HttpInterceptorFn } from '@angular/common/http';
import { inject, Injector } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const injector = inject(Injector); // Inject Injector instead of AuthService directly
  const authService = injector.get(AuthService); // Lazy resolve AuthService

  if (authService.isAuthenticated()) {
    const token = localStorage.getItem('token');
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }

  return next(req);
};
