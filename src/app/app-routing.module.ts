import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { MyProfilePage } from './pages/user/my-profile/my-profile.page';
import { LoginPage } from './pages/user/login/login.page';
import { RegisterPage } from './pages/user/register/register.page';
import { CreateComplaintPage } from './pages/create-complaint/create-complaint.page';
import { InfoPage } from './pages/info/info.page';
import { HelpPage } from './pages/help/help.page';
import { AlertsPage } from './pages/alerts/alerts.page';
import { SchedulePage } from './pages/schedule/schedule.page';

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
    component: HomePage
  },
  {
    // mi perfil (todos)
    path: 'my-profile',
    component: MyProfilePage
  },
  {
    // ingresar (todos)
    path: 'login',
    component: LoginPage
  },

  // pasajero
  {
    // registrar (pasajero)
    path: 'register',
    component: RegisterPage
  },
  {
    // denunciar (pasajero)
    path: 'create-complaint',
    component: CreateComplaintPage
  },
  {
    // informacion (pasajero)
    path: 'info',
    component: InfoPage
  },
  {
    // ayuda (pasajero)
    path: 'help',
    component: HelpPage
  },
  {
    // noticias o alertas (pasajero)
    path: 'alerts',
    component: AlertsPage
  },
  {
    // horarios (pasajero)
    path: 'schedule',
    component: SchedulePage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
