import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRestaurantPageRoutingModule } from './detail-restaurant-routing.module';

import { DetailRestaurantPage } from './detail-restaurant.page';
import {InlineAlertComponent} from "../../../../../shared/components/inline-alert/inline-alert.component";
import {SharedModule} from "../../../../../shared/module/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRestaurantPageRoutingModule,
    SharedModule
  ],
    exports: [
        InlineAlertComponent
    ],
    declarations: [DetailRestaurantPage, InlineAlertComponent]
})
export class DetailRestaurantPageModule {}
