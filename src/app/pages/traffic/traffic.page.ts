import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;
@Component({
  selector: 'app-traffic',
  templateUrl: 'traffic.page.html'
})
export class TrafficPage implements OnInit {
  mapRef = null;

  constructor(
    private router: Router,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadMap();
  }

  goHome() {
    this.router.navigate(['home']);
  }

  async loadMap() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    // create map
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
      .addListenerOnce(this.mapRef, 'idle', () => {
        // loaded
        console.log('added');
        loading.dismiss();
        this.addMarker(myLatLng.lat, myLatLng.lng);
      });
  }

  private addMarker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: 'Hello World!'
    });
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }

}
