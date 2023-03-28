import { Component, OnInit } from '@angular/core';

import { Restaurant } from 'src/app/shared/models/restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})
export class RestaurantDetailComponent implements OnInit {

  public resto?: Restaurant;

  constructor() {}

  ngOnInit() {
    let jsonObject: JSON;
    let arrayObj: any = [
      {}
    ];

    jsonObject = <JSON>arrayObj;

    this.resto = new Restaurant("Test", jsonObject, "67000", "16 rue des chevaliers", "Strasbourg", "Placeholder for the moment being");
  }

  isModalOpen: boolean = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
