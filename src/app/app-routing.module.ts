import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // todos
  {
    // inicio (todos)
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    // mi perfil (todos)
    path: 'my-profile',
    loadChildren: './pages/user/my-profile/my-profile.module#MyProfilePageModule'
  },
  {
    // ingresar (todos)
    path: 'login',
    loadChildren: './pages/user/login/login.module#LoginPageModule'
  },

  // pasajero
  {
    // registrar (pasajero)
    path: 'register',
    loadChildren: './pages/user/register/register.module#RegisterPageModule'
  },
  {
    // denunciar (pasajero)
    path: 'create-complaint',
    loadChildren: './pages/create-complaint/create-complaint.module#CreateComplaintPageModule'
  },
  {
    // informacion (pasajero)
    path: 'info',
    loadChildren: './pages/info/info.module#InfoPageModule'
  },
  {
    // ayuda (pasajero)
    path: 'help',
    loadChildren: './pages/help/help.module#HelpPageModule'
  },
  {
    // noticias o alertas (pasajero)
    path: 'alerts',
    loadChildren: './pages/alerts/alerts.module#AlertsPageModule'
  },
  {
    // horarios (pasajero)
    path: 'schedule',
    loadChildren: './pages/schedule/schedule.module#SchedulePageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
