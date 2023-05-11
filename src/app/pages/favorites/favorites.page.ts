import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/restaurant';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public favorites!: any[];
  public isLoading: boolean = true;
  public endListText: string = "Cliquez ici pour consulter d'avantage";
  public bShowText: boolean = true;
  private nextPage: string = "";

  constructor(private _restaurantService: RestaurantService) {}

  ngOnInit() {
    this._restaurantService.getUserFavorites().subscribe({
      next: (res: any) => { this.favorites = res.data; this.nextPage = res.links.next; this.isLoading = false; },
      error: error => console.error(error)
    });
  }

  onIonInfinite(ev: any) {
    this._restaurantService.getNextFavorites(this.nextPage).subscribe({
      next: (res: any) => { this.favorites = [...this.favorites, ...res.data]; this.nextPage = res.links.next; },
      error: error => { this.endListText = "Plus rien à voir"; this.bShowText = true; }
    });

    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  onClick() {
    this._restaurantService.getNextFavorites(this.nextPage).subscribe({
      next: (res: any) => { this.favorites = [...this.favorites, ...res.data]; this.nextPage = res.links.next; this.bShowText = false; },
      error: error => { this.endListText = "Plus rien à voir"; this.bShowText = true; }
    });
  }

  deleteFavorite(favorite: any) {
    // console.log(favorite);
    this.favorites = this.favorites.filter(x => x !== favorite);
  }
}
