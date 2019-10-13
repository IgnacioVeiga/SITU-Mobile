import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    // inicio
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    // noticias
    path: 'news',
    loadChildren: './pages/news/news.module#NewsPageModule'
  },
  {
    // horarios
    path: 'schedule',
    loadChildren: './pages/schedule/schedule.module#SchedulePageModule'
  },
  {
    // denuncias
    path: 'complaint',
    loadChildren: './pages/complaint/complaint.module#ComplaintPageModule'
  },
  {
    // informacion
    path: 'info',
    loadChildren: './pages/info/info.module#InfoPageModule'
  },
  {
    // ayuda
    path: 'help',
    loadChildren: './pages/help/help.module#HelpPageModule'
  },
  {
    // ingresar
    path: 'login',
    loadChildren: './pages/user/login/login.module#LoginPageModule'
  },
  {
    // registrar
    path: 'register',
    loadChildren: './pages/user/register/register.module#RegisterPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
