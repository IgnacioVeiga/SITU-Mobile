import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html'
})
export class IngresarPage {

  constructor(
    private router: Router
  ) { }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
