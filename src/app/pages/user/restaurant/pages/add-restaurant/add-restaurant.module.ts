import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRestaurantPageRoutingModule } from './add-restaurant-routing.module';

import { AddRestaurantPage } from './add-restaurant.page';
import {EditRestaurantPageModule} from "../edit-restaurant/edit-restaurant.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddRestaurantPageRoutingModule,
        ReactiveFormsModule,
        EditRestaurantPageModule
    ],
  declarations: [AddRestaurantPage]
})
export class AddRestaurantPageModule {}
