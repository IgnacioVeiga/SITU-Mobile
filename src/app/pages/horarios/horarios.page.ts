import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-horarios',
  templateUrl: 'horarios.page.html'
})
export class HorariosPage {

  mostrarHorarios = false;

  constructor(
    private router: Router,
    public alertController: AlertController,
  ) { }

  goHome() {
    this.router.navigate(['inicio']);
  }

  cerrarMostrarHorarios() {
    this.mostrarHorarios = false;
  }

  async presentAlertPrompt() {
    this.mostrarHorarios = false;
    const alert = await this.alertController.create({
      header: 'Seleccione por favor',
      inputs: [
        {
          name: 'linea',
          type: 'text',
          id: 'linea',
          placeholder: 'Línea'
        },
        {
          name: 'recorrido',
          type: 'text',
          id: 'recorrido',
          placeholder: 'Recorrido'
        }
      ],
      buttons: [
        {
          text: 'Mostrar paradas',
          handler: () => {
            this.mostrarHorarios = true;
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });
    await alert.present();
  }

}
