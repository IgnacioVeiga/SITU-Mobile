import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationDTO } from 'src/app/models/modelos';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html'
})
export class AlertasPage implements OnInit {
  loading: boolean;
  alertas: InformationDTO[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.generarAlertas();
      this.loading = false;
    }, 1500);
  }

  generarAlertas() {
    for (let i = 0; i < 5; i++) {
      const info = new InformationDTO();
      info.title = 'Alerta N° ' + (i + 1);
      info.subtitle = 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sem ut vivamus tortor in tincidunt metus...';
      info.date = new Date();
      this.alertas.push(info);
    }
  }

  goHome() {
    this.router.navigate(['inicio']);
  }
}
