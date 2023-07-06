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
      url: "/hacer-denuncia",
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
      icon: "clock",
    },
    {
      title: "Alertas",
      url: "/alerts",
      icon: "notifications",
    },
    {
      title: "Mi perfil",
      url: "/my-profile",
      icon: "contact",
    },
    {
      title: "Información",
      url: "/info",
      icon: "information-circle-outline",
    },
    {
      title: "Ayuda",
      url: "/help",
      icon: "help-buoy",
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
