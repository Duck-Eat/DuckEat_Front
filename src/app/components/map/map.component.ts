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
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();

      console.log('Current position:', coordinates);
    };
  }

  ngAfterViewInit() {
    this.initMap();
  }

  private map: any;

  private initMap() {
    this.map = Leaf.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = Leaf.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 3,
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
    });

    tiles.addTo(this.map);
  }
}
