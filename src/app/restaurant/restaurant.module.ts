import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestaurantLandpageComponent } from './containers/restaurant-landpage/restaurant-landpage.component';
import { RestaurantMenusComponent } from './containers/restaurant-menus/restaurant-menus.component';
import { RestaurantOrdersComponent } from './containers/restaurant-orders/restaurant-orders.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { MenuEffects } from './store/effects/menu.effects';
import { MenuOrderComponent } from './components/menu-order/menu-order.component';
import { OrderEffects } from './store/effects/order.effects';

const routes: Routes = [
  {
    path: '',
    component: RestaurantLandpageComponent
  },
  {
    path: 'menus',
    component: RestaurantMenusComponent
  },
  {
    path: 'orders',
    component: RestaurantOrdersComponent
  },
];

@NgModule({
  declarations: [
    RestaurantLandpageComponent,
    RestaurantMenusComponent,
    RestaurantOrdersComponent,
    MenuCardComponent,
    MenuOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('restaurant', reducers),
    EffectsModule.forFeature([MenuEffects, OrderEffects]),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule
  ],
  exports: [RouterModule]
})
export class RestaurantModule {}
