import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InformacionDTO } from "src/app/models/modelos";

@Component({
  selector: "app-alertas",
  templateUrl: "./alertas.page.html",
})
export class AlertasPage implements OnInit {
  cargando: boolean;

  // Puede ser filtrado y se muestra en pantalla.
  alertas: InformacionDTO[] = [];

  // Es una copia de seguridad y no se muestra en pantalla.
  alertasBackup: InformacionDTO[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargando = true;
    setTimeout(() => {
      this.generarAlertas();
      this.cargando = false;
    }, 1000);
  }

  generarAlertas() {
    for (let i = 0; i < 12; i++) {
      const info = new InformacionDTO();
      info.titulo = "Alerta " + (i + 1) * 321;
      info.subtitulo =
        "Lorem ipsum dolor sit amet consectetur adipiscing elit, sem ut vivamus tortor in tincidunt metus...";
      info.fecha = new Date();
      this.alertas.push(info);
    }
    this.alertasBackup = [...this.alertas];
  }

  goHome() {
    this.router.navigate(["inicio"]);
  }

  buscar(event) {
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
