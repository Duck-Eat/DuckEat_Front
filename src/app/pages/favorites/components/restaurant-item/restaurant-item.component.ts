import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss'],
})
export class RestaurantItemComponent implements OnInit {

  @Input() currentFavorite: any;
  @Output() delete: EventEmitter<number> = new EventEmitter();
  public currentRestaurant: Restaurant;

  constructor(private _restaurantService: RestaurantService) {}

  ngOnInit() {
    this._restaurantService.getRestaurant(this.currentFavorite.restaurantId).subscribe({
      next: (res: any) => { this.currentRestaurant = res.data },
      error: error => console.error(error)
    });
  }

  deleteFavorite() {
    console.log(this.currentFavorite);
    this._restaurantService.deleteFavorite(this.currentFavorite.id).subscribe({
      next: (res: any) => { console.log(res); this.delete.emit(this.currentFavorite); },
      error: error => console.log(error)
    })
  }
}
