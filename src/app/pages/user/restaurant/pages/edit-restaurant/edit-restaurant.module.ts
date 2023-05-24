import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRestaurantPageRoutingModule } from './edit-restaurant-routing.module';

import { EditRestaurantPage } from './edit-restaurant.page';
import {RestaurantFormComponent} from "../../components/restaurant-form/restaurant-form.component";
import {SharedModule} from "../../../../../shared/module/shared.module";
import {DetailRestaurantPageModule} from "../detail-restaurant/detail-restaurant.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRestaurantPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    DetailRestaurantPageModule
  ],
    exports: [
        RestaurantFormComponent
    ],
    declarations: [EditRestaurantPage, RestaurantFormComponent]
})
export class EditRestaurantPageModule {}
