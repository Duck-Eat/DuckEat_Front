import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../../../pages/authentication/services/auth-service.service";
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  private pathToFavorites: string = "/home/favorites";

  constructor(public authServiceService: AuthServiceService, public navService: NavigationService) { }

  ngOnInit() {}

  redirectTo() {
    this.navService.redirectTo(this.pathToFavorites);
  }

}
