import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [ // sidebar
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Hacer denuncia',
      url: '/create-complaint',
      icon: 'warning'
    },
    {
      title: 'Horarios',
      url: '/schedule',
      icon: 'clock'
    },
    {
      title: 'Noticias o alertas',
      url: '/alerts',
      icon: 'paper'
    },
    {
      title: 'Información',
      url: '/info',
      icon: 'information-circle-outline'
    },
    {
      title: 'Ayuda',
      url: '/help',
      icon: 'help-buoy'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
