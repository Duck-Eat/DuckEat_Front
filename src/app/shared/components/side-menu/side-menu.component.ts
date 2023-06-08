import {Component, OnInit, SimpleChanges} from '@angular/core';
import { AuthServiceService } from "../../../pages/authentication/services/auth-service.service";
import { NavigationService } from '../../services/navigation.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  public readonly pathToHome: string = "/home";
  public readonly pathToFavorites: string = "/home/favorites";
  public readonly pathToMesRestaurants: string = "/user/restaurant";
  public currentURL: string = "";

  constructor(public authServiceService: AuthServiceService, public navService: NavigationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentURL = this.navService.getCurrentURL();
  }

  redirectToHome() {
    this.navService.redirectTo(this.pathToHome);
    this.currentURL = this.pathToHome;
  }

  redirectToFavorites() {
    this.navService.redirectTo(this.pathToFavorites);
    this.currentURL = this.pathToFavorites;
  }

  redirectToMesRestaurants() {
    this.navService.redirectTo(this.pathToMesRestaurants);
    this.currentURL = this.pathToMesRestaurants;
  }

}
