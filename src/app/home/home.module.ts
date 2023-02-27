import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { RestaurantListComponent } from '../components/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from '../components/restaurant/restaurant.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    RestaurantListComponent,
    RestaurantComponent
  ]
})
export class HomePageModule {}
