import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantPage } from './restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPage
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add-restaurant/add-restaurant.module').then( m => m.AddRestaurantPageModule)
  },
  {
    path: ':id/edit',
    loadChildren: () => import('./pages/edit-restaurant/edit-restaurant.module').then( m => m.EditRestaurantPageModule)
  },
  { path: ':id', redirectTo: ':id/detail', pathMatch: "full" },
  {
    path: ':id/detail',
    loadChildren: () => import('./pages/detail-restaurant/detail-restaurant.module').then( m => m.DetailRestaurantPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantPageRoutingModule {}
