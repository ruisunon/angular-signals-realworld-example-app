import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('@auth/feature-auth').then((f) => f.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@auth/feature-auth').then((f) => f.RegisterComponent),
  },
];
