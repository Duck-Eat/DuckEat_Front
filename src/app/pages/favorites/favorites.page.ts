import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/restaurant';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public favorites!: any[];
  public isLoading: boolean = true;
  private nextPage: string = "";

  constructor(private _restaurantService: RestaurantService) { }

  ngOnInit() {
    this._restaurantService.getUserFavorites().subscribe({
      next: (res: any) => { this.favorites = res.data; this.nextPage = res.links.next; this.isLoading = false; },
      error: error => console.error(error)
    });
  }

  onClick() {
    this._restaurantService.getNextFavorites(this.nextPage).subscribe({
      next: (res: any) => { this.favorites = [...this.favorites, ...res.data]; this.nextPage = res.links.next; },
      error: error => console.error(error)
    });
  }
}
