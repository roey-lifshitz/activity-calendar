import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {
  selectedDateKey,
  selectedDateReducer,
} from './store/selected-date/selected-date.reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './login/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore({ [selectedDateKey]: selectedDateReducer }),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
