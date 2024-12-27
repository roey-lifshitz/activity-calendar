import { inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const injector = inject(Injector); // Use Injector to avoid eager resolution
  const authService = injector.get(AuthService);
  const router = injector.get(Router);

  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
