import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../../shared/models/restaurant";
import {RestaurantService} from "./service/restaurant.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  restaurants: Restaurant[] = [];
  isLoading: boolean = true;

  constructor(
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(() => {
      this.getRestaurants();
    });
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
      .subscribe({
        next: restaurants => this.restaurants = restaurants,
        complete: () => this.isLoading = false,
      });
  }

}
