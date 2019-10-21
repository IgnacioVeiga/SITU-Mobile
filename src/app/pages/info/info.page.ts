import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html'
})
export class InfoPage {


  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['inicio']);
  }

}
