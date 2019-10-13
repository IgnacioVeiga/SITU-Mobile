import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // inicio
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    // noticias
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule)
  },
  {
    // horarios
    path: 'schedule',
    loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.SchedulePageModule)
  },
  {
    // quejas/denuncias
    path: 'complaint',
    loadChildren: () => import('./pages/complaint/complaint.module').then(m => m.ComplaintPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
