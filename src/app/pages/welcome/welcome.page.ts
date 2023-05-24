import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from './services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/restaurant';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  public restaurant: Restaurant;
  public isLoading: boolean = true;
  public modalOpen: boolean = false;

  constructor(public _restaurantService: RestaurantService) { }

  ngOnInit() {
    this._restaurantService.getRestaurant().subscribe({
      next: (res: any) => { this.restaurant = res.data; this.isLoading = false },
      error: error => console.error(error)
    })
  }

  changePage() { }

  setOpen(b: boolean) {
    this.modalOpen = b;
  }
}
