import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {
  /*
  esta es la pantalla de inicio,
  tanto para pasajeros como choferes
  */

  constructor(
    private router: Router
  ) { }

  goTo(page: string) {
    if (page) {
      this.router.navigate([page]);
    }
  }
}
