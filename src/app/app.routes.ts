import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes').then(routes => routes.dashboardRoutes)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.routes').then(routes => routes.settingsRoutes)
  }
];
