import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-reporte-chofer",
  templateUrl: "./reporte-chofer.page.html",
})
export class ReporteChoferPage {
  constructor(
    private router: Router,
    public toastController: ToastController
  ) {}

  async reportar() {
    const toast = await this.toastController.create({
      message: "�Reporte enviado con �xito al sistema!",
      // Duration: tiempo de duraci�n en milisegundos.
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

  goHome() {
    this.router.navigate(["inicio"]);
  }
}
