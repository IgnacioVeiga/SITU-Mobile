import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NoticiasAlertasPage } from './noticias-alertas.page';
import { NoticiasPage } from './noticias/noticias.page';
import { AlertasPage } from './alertas/alertas.page';

const routes: Routes = [
  {
    path: 'noticias-alertas',
    component: NoticiasAlertasPage,
    children: [
      {
        path: 'noticias',
        component: NoticiasPage
      },
      {
        path: 'alertas',
        component: AlertasPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/noticias-alertas/noticias',
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
  declarations: [
    AlertasPage,
    NoticiasPage
  ]
})
export class NoticiasAlertasPageModule { }
