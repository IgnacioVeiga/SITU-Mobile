import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html'
})
export class MiPerfilPage {

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['inicio']);
  }

}
