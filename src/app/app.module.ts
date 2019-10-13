import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { AlertsPage } from './pages/alerts/alerts.page';
import { CreateComplaintPage } from './pages/create-complaint/create-complaint.page';
import { HelpPage } from './pages/help/help.page';
import { InfoPage } from './pages/info/info.page';
import { SchedulePage } from './pages/schedule/schedule.page';
import { LoginPage } from './pages/user/login/login.page';
import { RegisterPage } from './pages/user/register/register.page';
import { MyProfilePage } from './pages/user/my-profile/my-profile.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AlertsPage,
    CreateComplaintPage,
    HelpPage,
    InfoPage,
    SchedulePage,
    LoginPage,
    RegisterPage,
    MyProfilePage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
