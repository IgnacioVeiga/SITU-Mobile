import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html'
})
export class AyudaPage {

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['inicio']);
  }

}
