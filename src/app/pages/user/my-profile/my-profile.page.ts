import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MyProfilePage implements OnInit {

  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(["home"]);
  }

  async guardarCambios() {
    const toast = await this.toastController.create({
      message: "¡Perfil editado con éxito!",
      // Duration: tiempo de duración en milisegundos.
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
    this.goHome();
  }
}
