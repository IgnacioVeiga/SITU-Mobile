import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-driver-report',
  templateUrl: './driver-report.page.html',
  styleUrls: ['./driver-report.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DriverReportPage implements OnInit {

  constructor(
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async reportar() {
    const toast = await this.toastController.create({
      message: "¡Reporte enviado con éxito al sistema!",
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
    this.router.navigate(["home"]);
  }
}
