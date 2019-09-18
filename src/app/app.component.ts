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
      title: 'Quejas/Denuncias',
      url: '/complaint',
      icon: 'warning'
    },
    {
      title: 'Horarios',
      url: '/schedule',
      icon: 'clock'
    },
    {
      title: 'Noticias',
      url: '/news',
      icon: 'paper'
    },
    {
      title: 'Tráfico',
      url: '/traffic',
      icon: 'bus'
    },
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
