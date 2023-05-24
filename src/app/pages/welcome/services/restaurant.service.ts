import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private router: Router) {}

  getRestaurant(): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/restaurants/1`);
  }

  getRandomRestaurants(): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/user/random`);
  }

  getRestaurantNote(id: number): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/restaurants/note/` + id);
  }
}
