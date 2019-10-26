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
      header: 'Seleccione',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Línea'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Recorrido'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Mostrar paradas',
          handler: () => {
            this.mostrarHorarios = true;
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
