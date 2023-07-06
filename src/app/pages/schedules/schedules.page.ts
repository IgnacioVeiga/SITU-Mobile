import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.page.html',
  styleUrls: ['./schedules.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SchedulesPage implements OnInit {

  mostrarHorarios = false;

  constructor(
    private router: Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['home']);
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
