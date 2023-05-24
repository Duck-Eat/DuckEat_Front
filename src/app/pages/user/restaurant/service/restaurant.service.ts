import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Restaurant } from '../../../../shared/models/restaurant';
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurantsUrl = `${environment.baseApiUrl}/restaurants`;  // URL to web api
  private userRestaurantsUrl = `${environment.baseApiUrl}/user/restaurants`; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  /** GET restaurants from the server */
  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.userRestaurantsUrl)
      .pipe(
        map((result: any): Restaurant[] => result.data),
        tap(_ => this.log('fetched restaurants')),
        catchError(this.handleError<Restaurant[]>('get restaurants', []))
      );
  }

  /** GET restaurant by id. Will 404 if id not found */
  getRestaurant(id: number): Observable<Restaurant> {
    const url = `${this.restaurantsUrl}/${id}`;
    return this.http.get<Restaurant>(url).pipe(
      map((result: any): Restaurant => result.data),
      tap(_ => this.log(`fetched restaurant id=${id}`)),
      catchError(this.handleError<Restaurant>(`get restaurant id=${id}`))
    );
  }

  /** GET restaurant by id. Return `undefined` when id not found */
  getRestaurantNo404(id: number): Observable<Restaurant|undefined> {
    const url = `${this.restaurantsUrl}/${id}`;
    return this.http.get<Restaurant>(url).pipe(
      map((result: any): Restaurant => result.data),
      tap(_ => this.log(`fetched restaurant id=${id}`)),
      catchError(
        err => {
          console.log(err);
          if (err.status !== 404) {
            throwError(err);
          }

          return of(undefined);
        }
      ),
      catchError(this.handleError<Restaurant>(`get restaurant id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new restaurant to the server */
  addRestaurant(restaurant: any): Observable<Restaurant> {
    restaurant.postal_code = restaurant.postalCode;

    return this.http.post<Restaurant>(this.restaurantsUrl, restaurant, this.httpOptions).pipe(
      tap((newRestaurant: Restaurant) => this.log(`added restaurant id=${newRestaurant.id}`)),
      catchError(this.handleError<Restaurant>('add restaurant'))
    );
  }

  /** PUT: update the restaurant on the server */
  updateRestaurant(restaurant: any): Observable<Restaurant> {
    const restaurantUpdateUrl = `${this.restaurantsUrl}/${restaurant.id}`;

    restaurant.postal_code = restaurant.postalCode;

    return this.http.put<Restaurant>(restaurantUpdateUrl, restaurant, this.httpOptions).pipe(
      tap(_ => this.log(`updated restaurant id=${restaurant.id}`)),
      catchError(this.handleError<Restaurant>('update restaurant'))
    );
  }

  /** DELETE: delete the restaurant from the server */
  deleteRestaurant(id: number): Observable<Restaurant> {
    const url = `${this.restaurantsUrl}/${id}`;

    return this.http.delete<Restaurant>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted restaurant id=${id}`)),
      catchError(this.handleError<Restaurant>('delete restaurant'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a Restaurant service message with the MessageService */
  private log(message: string) {
    console.log(`Restaurant service: ${message}`);
  }
}
