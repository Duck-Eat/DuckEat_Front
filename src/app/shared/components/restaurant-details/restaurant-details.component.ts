import { Component, Input, OnInit } from '@angular/core';
import { RestaurantServiceService } from 'src/app/pages/results/services/restaurant-service.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit {

  constructor(public _restaurantService: RestaurantServiceService) { }

  ngOnInit() {
    if (this.restaurant !== undefined) {
      this._restaurantService.getRestaurantNote(this.restaurant.id).subscribe({
        next: (res: any) => this.comments = res.data,
        error: error => console.error(error)
      });
    }
  }

  ngAfterViewInit() { }

  @Input() restaurant?: Restaurant;
  isModalOpen: boolean = false;
  comments: Comment[];

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
