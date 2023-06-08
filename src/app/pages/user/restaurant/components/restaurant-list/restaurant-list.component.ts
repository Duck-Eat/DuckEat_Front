import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Restaurant} from "../../../../../shared/models/restaurant";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {

  @Input() restaurants: Restaurant[] = [];
  @Input() isLoading: boolean = true;
  @Output() deleteRestaurantId: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  deleteRestaurant(id: number) {
    this.deleteRestaurantId.emit(id);
  }
}
