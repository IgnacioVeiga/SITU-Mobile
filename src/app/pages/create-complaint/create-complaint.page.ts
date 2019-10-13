import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-complaint',
  templateUrl: 'create-complaint.page.html'
})
export class CreateComplaintPage {

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['home']);
  }

}
