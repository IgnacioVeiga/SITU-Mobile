import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html'
})
export class InicioPage {
  /*
  esta es la pantalla de inicio,
  tanto para pasajeros como choferes
  */

  constructor(
    private router: Router,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController
  ) { }

  goTo(page: string) {
    if (page) {
      this.router.navigate([page]);
    }
  }

  async opcionesMiPerfil() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Mi perfil',
      buttons: [{
        text: 'Editar',
        icon: 'create',
        handler: () => {
          this.goTo('mi-perfil');
        }
      }, {
        text: 'Cerrar sesión',
        icon: 'log-out',
        handler: () => {
          this.cerrarSesion();
        }
      }]
    });
    await actionSheet.present();
  }

  async cerrarSesion() {
    const toast = await this.toastController.create({
      message: 'Sesión cerrada con exito, hasta luego!',
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
    this.goTo('ingresar');
  }

}
