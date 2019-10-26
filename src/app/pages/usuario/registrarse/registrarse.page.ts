import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html'
})
export class RegistrarsePage {

  constructor(
    private router: Router
  ) { }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
