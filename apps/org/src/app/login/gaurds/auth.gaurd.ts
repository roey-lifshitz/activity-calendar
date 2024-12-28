import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/toke.service';

export const authGuard = () => {
  const tokenService: TokenService = inject(TokenService);
  const router: Router = inject(Router);

  if (!tokenService.getToken()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
