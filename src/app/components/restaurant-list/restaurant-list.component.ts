import { Component, OnInit } from '@angular/core';

import { RESTAURANTS } from 'src/app/models/restaurant-mock';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  listRestaurant = RESTAURANTS;

  onIonInfinite(_ev: any) {
    // console.log("test");
  }

}
