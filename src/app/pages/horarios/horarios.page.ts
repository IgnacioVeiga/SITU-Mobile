import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horarios',
  templateUrl: 'horarios.page.html'
})
export class HorariosPage {

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['inicio']);
  }

}
