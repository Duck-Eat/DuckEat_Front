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

  getRestaurants(): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/restaurants`);
  }

  getRandomRestaurants(): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/user/random`);
  }

  getRestaurantNote(id: number): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/restaurants/note/` + id);
  }

  setFavorite(id: number) {
    return this.http.post(`${environment.baseApiUrl}/favoris`, { restaurant_id: id });
  }
}
