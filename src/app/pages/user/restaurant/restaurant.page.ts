import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../../shared/models/restaurant";
import {RestaurantService} from "./service/restaurant.service";
import {ActivatedRoute} from "@angular/router";
import {Notification, NotificationType} from "../../../shared/Utils/notification";
import {restaurant} from "ionicons/icons";

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

  deleteRestaurant(id: number) {
    this.restaurantService.deleteRestaurant(id).subscribe({
      next: () => {
        this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== id);
        new Notification('Le restaurant est supprimé.', NotificationType.success).notify();
      },
      error: () => {
        new Notification('Impossible de supprimer le restaurant', NotificationType.error).notify();
      }
    });
  }
}
