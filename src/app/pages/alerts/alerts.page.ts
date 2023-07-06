import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from "@angular/router";
import { Alert } from "src/app/models";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlertsPage implements OnInit {
  cargando: boolean | undefined;

  // Puede ser filtrado y se muestra en pantalla.
  alertas: Alert[] = [];

  // Es una copia de seguridad y no se muestra en pantalla.
  alertasBackup: Alert[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.cargando = true;
    setTimeout(() => {
      this.generarAlertas();
      this.cargando = false;
    }, 1000);
  }

  generarAlertas() {
    for (let i = 0; i < 12; i++) {
      const info = new Alert();
      info.titulo = "Alerta " + (i + 1) * 321;
      info.subtitulo =
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sem ut vivamus tortor in tincidunt metus...";
      info.fecha = new Date();
      this.alertas.push(info);
    }
    this.alertasBackup = [...this.alertas];
  }

  goHome() {
    this.router.navigate(["home"]);
  }

  buscar(event: { target: { value: any; }; }) {
    // La constante "termino" es lo que escribimos en el buscador.
    const termino = event.target.value;
    if (termino.length === 0) {
      // Vuelve la lista a la normalidad.
      this.alertas = [...this.alertasBackup];
      return;
    } else if (termino.trim().length > 1) {
      // Si escribimos al menos 1 caracter, hace la busqueda.
      this.aplicarBusqueda(termino.trim());
    }
  }

  // La variable "termino" es lo que escribimos en el buscador.
  private aplicarBusqueda(termino: string): void {
    termino = termino.toLowerCase();
    // Al "termino" lo hacemos minuscula y buscamos coincidencias.

    const resultadoFiltrado = this.alertasBackup.filter(
      (item) =>
        (item.titulo && item.titulo.toLowerCase().indexOf(termino) !== -1) ||
        (item.subtitulo && item.subtitulo.toLowerCase().indexOf(termino) !== -1)
    );

    // Se actualiza la lista.
    this.alertas = resultadoFiltrado;
  }
}
