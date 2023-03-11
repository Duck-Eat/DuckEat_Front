import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseRestaurantPage } from '../pages/choose-restaurant/choose-restaurant.page';
import { ResultsPage } from '../pages/results/results.page';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: 'results', component: ResultsPage },
      { path: 'choose', component: ChooseRestaurantPage },
      { path: '', component: WelcomePage, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
