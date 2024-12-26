import { Route } from '@angular/router';
import { authGuard } from './login/gaurds/auth.gaurd';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import(
        './login/components/organisms/login-page/login-page.component'
      ).then((m) => m.LoginPageComponent),
  },

  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import(
        './scheduler/components/organisms/activity-scheduler/activity-scheduler.component'
      ).then((m) => m.ActivitySchedulerComponent),
  },
];
