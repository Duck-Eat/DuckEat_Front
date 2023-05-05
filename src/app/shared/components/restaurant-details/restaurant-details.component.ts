import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantServiceService } from 'src/app/pages/results/services/restaurant-service.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss'],
})
export class RestaurantDetailsComponent implements OnInit {

  @Input() restaurant?: Restaurant;
  @Input() isOpen: boolean = false;
  @Output() closeEvent = new EventEmitter<boolean>();
  comments: Comment[];

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

  closeModal() {
    this.closeEvent.emit(false);
  }
}
