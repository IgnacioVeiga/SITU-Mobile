import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/user/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'my-profile',
    loadComponent: () => import('./pages/user/my-profile/my-profile.page').then(m => m.MyProfilePage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/user/sign-up/sign-up.page').then(m => m.SignUpPage)
  },
  {
    path: 'help',
    loadComponent: () => import('./pages/help/help.page').then(m => m.HelpPage)
  },
  {
    path: 'schedules',
    loadComponent: () => import('./pages/schedules/schedules.page').then(m => m.SchedulesPage)
  },
  {
    path: 'alerts',
    loadComponent: () => import('./pages/alerts/alerts.page').then(m => m.AlertsPage)
  },
  {
    path: 'info',
    loadComponent: () => import('./pages/info/info.page').then(m => m.InfoPage)
  },
  {
    path: 'driver-report',
    loadComponent: () => import('./pages/driver-report/driver-report.page').then(m => m.DriverReportPage)
  },
  {
    path: 'user-report',
    loadComponent: () => import('./pages/user-report/user-report.page').then( m => m.UserReportPage)
  },
];
