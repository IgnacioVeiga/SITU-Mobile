import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traffic',
  templateUrl: 'traffic.page.html'
})
export class TrafficPage {

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['home']);
  }

}
