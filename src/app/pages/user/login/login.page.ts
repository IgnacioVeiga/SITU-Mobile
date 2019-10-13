import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html'
})
export class LoginPage {

  constructor(
    private router: Router
  ) { }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
