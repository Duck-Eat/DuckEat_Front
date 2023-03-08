import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseRestaurantPageRoutingModule } from './choose-restaurant-routing.module';

import { ChooseRestaurantPage } from './choose-restaurant.page';
import { RestaurantSelecterComponent } from 'src/app/components/restaurant-selecter/restaurant-selecter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseRestaurantPageRoutingModule
  ],
  declarations: [
    ChooseRestaurantPage,
    RestaurantSelecterComponent
  ]
})
export class ChooseRestaurantPageModule {}
