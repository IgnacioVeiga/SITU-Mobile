import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hacer-denuncia',
  templateUrl: 'hacer-denuncia.page.html'
})
export class HacerDenunciaPage {
  otraFH = false;
  otroLugar = false;
  colectivoEspecifico = false;

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['inicio']);
  }

}
