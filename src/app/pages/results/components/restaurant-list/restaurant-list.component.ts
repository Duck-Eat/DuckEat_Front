import { Component, OnInit } from '@angular/core';

import { Restaurant } from 'src/app/shared/models/restaurant';
import { RestaurantServiceService } from 'src/app/pages/results/services/restaurant-service.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {

  dataRestaurant!: Restaurant[];

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
