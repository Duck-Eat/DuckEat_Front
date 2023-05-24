import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    SharedModule
  ],
  declarations: [
    FavoritesPage,
    RestaurantItemComponent,
  ]
})
export class FavoritesPageModule {}
