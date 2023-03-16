import { Component, OnInit, Input } from '@angular/core';
import { RestaurantResponse } from 'src/app/shared/models/restaurant-response';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  @Input() restaurant?: RestaurantResponse;
}
