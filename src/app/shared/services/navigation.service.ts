import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {}

  redirectTo(path: string) {
    this.router.navigate([path]);
  }

  getCurrentURL() {
    return this.router.url;
  }

}
