import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HacerDenunciaPage } from './hacer-denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: HacerDenunciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HacerDenunciaPage]
})
export class HacerDenunciaPageModule {}
