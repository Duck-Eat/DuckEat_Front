import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPageRoutingModule } from './restaurant-routing.module';

import { RestaurantPage } from './restaurant.page';
import {RestaurantListComponent} from "./components/restaurant-list/restaurant-list.component";
import {SharedModule} from "../../../shared/module/shared.module";
import {DetailRestaurantPageModule} from "./pages/detail-restaurant/detail-restaurant.module";
import {RestaurantCardComponent} from "./components/restaurant-card/restaurant-card.component";
import {ResultsPageModule} from "../../results/results.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPageRoutingModule,
    SharedModule,
    DetailRestaurantPageModule,
    ResultsPageModule
  ],
    declarations: [RestaurantPage, RestaurantListComponent, RestaurantCardComponent]
})
export class RestaurantPageModule {}
