import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Storage } from '@ionic/storage-angular';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private http: HttpClient, private storage: Storage, private router: Router) {
    this.storage.create();
  }

  async getRestaurants(number: number) {
    // this.http.get<?>
  }

  async getRandomRestaurant() {
    //
  }
}
