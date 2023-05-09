import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  getUserFavorites(): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/favoris`);
  }

  getNextFavorites(next: string): Observable<any> {
    return this.http.get(next);
  }

  getRestaurant(id: number): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/restaurants/` + id);
  }
}
