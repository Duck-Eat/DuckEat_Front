import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { environment } from "../../../environments/environment";
import {NavController} from "@ionic/angular";


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
