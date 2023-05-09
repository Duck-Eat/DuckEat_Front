import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss'],
})
export class RestaurantItemComponent implements OnInit {

  @Input() currentFavorite: any;
  public currentRestaurant: Restaurant;

  constructor(private _restaurantService: RestaurantService) { }

  ngOnInit() {
    this._restaurantService.getRestaurant(this.currentFavorite.restaurantId).subscribe({
      next: (res: any) => { this.currentRestaurant = res.data },
      error: error => console.error(error)
    })
  }
}
