import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantsComponent },
  { path: 'restaurantes/:id', component: RestaurantDetailComponent },
  { path: 'about', component: AboutComponent },
];
