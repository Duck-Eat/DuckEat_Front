import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../../../../shared/models/restaurant";
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../../service/restaurant.service";
import {InlineAlertType} from "../../../../../shared/components/inline-alert/inline-alert.component";

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.page.html',
  styleUrls: ['./detail-restaurant.page.scss'],
})
export class DetailRestaurantPage implements OnInit {

  restaurant: Restaurant | undefined;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(() => {
      this.getRestaurant();
    });
  }

  getRestaurant(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.restaurantService.getRestaurantNo404(id)
      .subscribe({
        next: restaurant => this.restaurant = restaurant,
        complete: () => this.isLoading = false,
      });
  }

  protected readonly InlineAlertType = InlineAlertType;
}
