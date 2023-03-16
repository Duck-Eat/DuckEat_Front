import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Storage } from '@ionic/storage-angular';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private http: HttpClient, private storage: Storage, private router: Router) {
    this.storage.create();
  }

  getRestaurants(): Observable<any>{
    return this.http.get(`${environment.baseApiUrl}/restaurants`);
  }

  async getRandomRestaurant() {
    //
  }
}
