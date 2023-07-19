import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ActionSheetController, ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  username: string = '';

  constructor(
    private router: Router,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController) { }

  ngOnInit() {
    this.username = localStorage.getItem('username') as string;
  }

  goTo(page: string) {
    if (page) {
      this.router.navigate([page]);
    }
  }

  async opcionesMiPerfil() {
    const actionSheet = await this.actionSheetController.create({
      header: "Mi perfil",
      buttons: [
        {
          text: "Editar",
          icon: "create",
          handler: () => {
            this.goTo("my-profile");
          },
        },
        {
          text: "Cerrar sesión",
          icon: "log-out",
          handler: () => {
            this.cerrarSesion();
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async cerrarSesion() {
    const toast = await this.toastController.create({
      message: "¡Sesión cerrada con éxito, hasta luego!",
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
    this.goTo("login");
  }
}
