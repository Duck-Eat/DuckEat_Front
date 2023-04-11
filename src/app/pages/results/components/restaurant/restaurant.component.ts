import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  @Input() restaurant?: Restaurant;
}
