import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { StarRankingComponent } from './components/star-ranking/star-ranking.component';
import { MapComponent } from './components/map/map.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    SharedModule
  ],
  declarations: [
    DetailPage,
    RestaurantDetailComponent,
    StarRankingComponent,
    MapComponent,
    CommentsComponent
  ],
})
export class DetailPageModule {}
