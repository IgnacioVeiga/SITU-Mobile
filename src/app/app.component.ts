import { Component, ViewEncapsulation } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public appPages = [ // sidebar
    {
      title: 'Inicio',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Hacer denuncia',
      url: '/hacer-denuncia',
      icon: 'warning'
    },
    {
      title: 'Horarios',
      url: '/horarios',
      icon: 'clock'
    },
    {
      title: 'Noticias o alertas',
      url: '/noticias-alertas',
      icon: 'paper'
    },
    {
      title: 'Información',
      url: '/info',
      icon: 'information-circle-outline'
    },
    {
      title: 'Ayuda',
      url: '/ayuda',
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
