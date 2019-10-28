import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html'
})
export class AyudaPage {
  // tslint:disable-next-line: max-line-length
  denunciar = 'Desde la pantalla de inicio debe acceder a "Hacer una denuncia", donde tendrá el formulario para completar. Debe indicar cual es la ubicación del incidente, si es en donde se encuentra ahora mismo o en una distinta (si ese es el caso complete manualmente los datos). Luego debe indicar cuando fue lo ocurrido, en caso de no ser la fecha y hora actual con indicar la fecha solamente será suficiente. A continuación debe indicar a que línea de colectivos se dirige y si se trata de un vehículo en específico debe indicar la patente y/o el interno. Por último tiene la posibilidad de adjuntar fotografías y al final hay un campo de texto donde puede detallar cual es el motivo de la denuncia, una vez finalice de completar el formulario debe seleccionar el botón "Denunciar" y listo.';

  // tslint:disable-next-line: max-line-length
  verHorarios = 'Desde la pantalla de inicio debe acceder a "Horarios de los recorridos", una vez ahí cargará un mapa con su ubicación actual y tendrá un botón flotante en la parte inferior derecha, al seleccionarlo debe indicar la línea y el recorrido a consultar. Una vez los datos completos se le indicará en el mapa los próximos colectivos en llegar, el nombre del chófer, su número de interno y su tiempo aproximado.';

  // tslint:disable-next-line: max-line-length
  alertasNoticias = 'Las alertas son notificaciones enviadas por los chóferes y los administradores de este sistema. Son de utilidad ya que, por decir algunos ejemplos, te dejarán al tanto si hay demoras en alguna ruta, el colectivo que esperabas no llega por alguna razón o incluso si ocurre algún paro de transporte.';

  constructor(
    private router: Router
  ) { }

  goHome() {
    this.router.navigate(['inicio']);
  }


  goTo(page: string) {
    if (page) {
      this.router.navigate([page]);
    }
  }

}
