import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRestaurantPageRoutingModule } from './add-restaurant-routing.module';

import { AddRestaurantPage } from './add-restaurant.page';
import {EditRestaurantPageModule} from "../edit-restaurant/edit-restaurant.module";
import {SharedModule} from "../../../../../shared/module/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddRestaurantPageRoutingModule,
        ReactiveFormsModule,
        EditRestaurantPageModule,
        SharedModule
    ],
  declarations: [AddRestaurantPage]
})
export class AddRestaurantPageModule {}
