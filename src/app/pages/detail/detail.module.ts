import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { RestaurantDetailComponent } from 'src/app/components/restaurant-detail/restaurant-detail.component';
import { StarRankingComponent } from 'src/app/components/star-ranking/star-ranking.component';
import { MapComponent } from 'src/app/components/map/map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule
  ],
  declarations: [
    DetailPage,
    RestaurantDetailComponent,
    StarRankingComponent,
    MapComponent
  ]
})
export class DetailPageModule {}
