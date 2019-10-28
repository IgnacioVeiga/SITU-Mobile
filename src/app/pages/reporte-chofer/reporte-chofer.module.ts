import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReporteChoferPage } from './reporte-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteChoferPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReporteChoferPage]
})
export class ReporteChoferPageModule {}
