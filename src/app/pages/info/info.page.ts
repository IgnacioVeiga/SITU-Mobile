import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html'
})
export class InfoPage {
  nosotros: boolean;
  lineas: boolean;

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['inicio']);
  }

  infoLineas() {
    this.nosotros = false;
    this.lineas = !this.lineas;
  }

  sobreNosotros() {
      this.lineas = false;
      this.nosotros = !this.nosotros;
  }

}
