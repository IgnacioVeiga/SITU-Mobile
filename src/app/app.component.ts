import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    {
      title: "Inicio",
      url: "/home",
      icon: "home",
    },
    {
      title: "Hacer denuncia",
      url: "/user-report",
      icon: "warning",
    },
    {
      title: "Reportar incidente",
      url: "/driver-report",
      icon: "warning",
    },
    {
      title: "Horarios",
      url: "/schedules",
      icon: "time",
    },
    {
      title: "Alertas",
      url: "/alerts",
      icon: "alert-circle",
    },
    {
      title: "Mi perfil",
      url: "/my-profile",
      icon: "person-circle",
    },
    {
      title: "Información",
      url: "/info",
      icon: "information-circle",
    },
    {
      title: "Ayuda",
      url: "/help",
      icon: "help-circle",
    },
    {
      title: "Salir",
      icon: "exit",
      handler: () => {
        // TODO: debe poder salirse de la app.
      },
    }
  ];

  constructor(
    private platform: Platform,
    // private statusBar: StatusBar
    // private splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }
}
