import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../../../models'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  user: User = new User();

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.user.name = 'Ignacio';
  }

  async logIn() {
    // TODO: simulate loading time with a spinner
    localStorage.setItem('username', this.user.name);

    const toast = await this.toastController.create({
      message: "¡Sesión iniciada!",
      duration: 3000,
      color: "success",
      buttons: [
        {
          side: "end",
          icon: "close",
        },
      ],
    });
    toast.present();

    this.router.navigate(['home']);
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
