import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NoticiasAlertasPage } from './noticias-alertas.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: NoticiasAlertasPage,
    children: [
      {
        path: 'noticias',
        loadChildren: './noticias/noticias.module#NoticiasPageModule'
      },
      {
        path: 'alertas',
        loadChildren: './alertas/alertas.module#AlertasPageModule'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/noticias-alertas/tabs/noticias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticiasAlertasPage]
})
export class NoticiasAlertasPageModule { }
