import { Component, OnInit } from '@angular/core';

import { RESTAURANTS } from 'src/app/models/restaurant-mock';
import { RestaurantResponse } from 'src/app/models/restaurant-response';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {

  dataRestaurant!: RestaurantResponse[];

  constructor(public _restaurantService: RestaurantServiceService) {}

  ngOnInit() {
    this._restaurantService.getRestaurants().subscribe({
      next: (res: any) => this.dataRestaurant = res.data,
      error: error => console.error(error)
    })
  }

  onIonInfinite(_ev: any) {
    // console.log("test");
  }

}
