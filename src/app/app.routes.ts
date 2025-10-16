import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'insert',
    loadComponent: () => import('./views/main/main.component'),
  },
  {
    path: '',
    redirectTo: '/insert',
    pathMatch: 'full',
  },
];
