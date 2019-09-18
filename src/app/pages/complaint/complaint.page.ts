import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: 'complaint.page.html'
})
export class ComplaintPage {

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['home']);
  }

}
