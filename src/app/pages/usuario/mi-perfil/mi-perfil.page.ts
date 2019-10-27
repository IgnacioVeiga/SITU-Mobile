import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html'
})
export class MiPerfilPage {

  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  goHome() {
    this.router.navigate(['inicio']);
  }

  async guardarCambios() {
    const toast = await this.toastController.create({
      message: 'Perfil editado con exito.',
      duration: 3000, // tiempo de duración en milisegundos
      color: 'success',
      buttons: [
        {
          side: 'end',
          icon: 'close'
        }
      ]
    });
    toast.present();
    this.goHome();
  }

}
