import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { RestaurantServiceService } from '../../services/restaurant-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, AfterViewInit {

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
