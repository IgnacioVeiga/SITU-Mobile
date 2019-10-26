import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioPage } from './inicio/inicio.page';
import { HacerDenunciaPage } from './pages/hacer-denuncia/hacer-denuncia.page';
import { AyudaPage } from './pages/ayuda/ayuda.page';
import { InfoPage } from './pages/info/info.page';
import { HorariosPage } from './pages/horarios/horarios.page';
import { IngresarPage } from './pages/usuario/ingresar/ingresar.page';
import { RegistrarsePage } from './pages/usuario/registrarse/registrarse.page';
import { MiPerfilPage } from './pages/usuario/mi-perfil/mi-perfil.page';
import { NoticiasAlertasPage } from './pages/noticias-alertas/noticias-alertas.page';
import { NoticiasAlertasPageModule } from './pages/noticias-alertas/noticias-alertas.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioPage,
    NoticiasAlertasPage,
    HacerDenunciaPage,
    AyudaPage,
    InfoPage,
    HorariosPage,
    IngresarPage,
    RegistrarsePage,
    MiPerfilPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NoticiasAlertasPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AlertController
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
