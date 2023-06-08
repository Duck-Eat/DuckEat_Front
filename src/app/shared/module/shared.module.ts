import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';
import { RestaurantDetailsComponent } from '../components/restaurant-details/restaurant-details.component';
import { MapComponent } from '../components/map/map.component';
import { StarRankingComponent } from '../components/star-ranking/star-ranking.component';
import {
    RestaurantDetailsModalComponent
} from "../components/restaurant-details-modal/restaurant-details-modal.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SideMenuComponent,
        LoadingSpinnerComponent,
        RestaurantDetailsComponent,
        MapComponent,
        StarRankingComponent,
        RestaurantDetailsModalComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SideMenuComponent,
        LoadingSpinnerComponent,
        RestaurantDetailsComponent,
        MapComponent,
        StarRankingComponent,
        RestaurantDetailsModalComponent
    ]
})
export class SharedModule { }
