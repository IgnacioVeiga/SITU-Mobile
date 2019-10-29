import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reporte-chofer',
  templateUrl: './reporte-chofer.page.html'
})
export class ReporteChoferPage implements OnInit {

  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async reportar() {
    const toast = await this.toastController.create({
      message: '¡Reporte enviado con éxito al sistema!',
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

  goHome() {
    this.router.navigate(['inicio']);
  }
}
