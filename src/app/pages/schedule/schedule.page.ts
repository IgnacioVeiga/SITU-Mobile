import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.page.html'
})
export class SchedulePage {

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['home']);
  }

}
