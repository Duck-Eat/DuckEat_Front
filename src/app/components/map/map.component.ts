import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

import * as Leaf from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initMap();
  }

  private map: any;

  private async initMap() {
    let mapCenter: any = [ 48.8566, 2.3522 ];

    if ((await Geolocation.checkPermissions()).location === "granted") {
      console.log("granted");
      const coordinates = await Geolocation.getCurrentPosition();
      mapCenter = [ coordinates.coords.latitude, coordinates.coords.longitude ];
    }

    this.map = Leaf.map('map', {
      center: mapCenter,
      zoom: 3
    });

    // console.log(mapCenter);

    const tiles = Leaf.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 3,
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
    });

    tiles.addTo(this.map);
  }
}
