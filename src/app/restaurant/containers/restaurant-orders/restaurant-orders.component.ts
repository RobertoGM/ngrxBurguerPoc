import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as MenuState from '../../store/reducers';
import * as MenuSelectors from '../../store/selectors/menu.selector';
import * as OrderSelectors from '../../store/selectors/order.selector';
import * as MenuActions from '../../store/actions/menu.actions';
import * as OrderActions from '../../store/actions/orders.actions';

@Component({
  selector: 'app-restaurant-orders',
  templateUrl: './restaurant-orders.component.html',
  styleUrls: ['./restaurant-orders.component.scss']
})
export class RestaurantOrdersComponent implements OnInit {
  menus$ = this.store.pipe(select(MenuSelectors.getAllMenus));
  baseMeats$ = this.store.pipe(select(OrderSelectors.getAllBaseMeats));
  ingredients$ = this.store.pipe(select(OrderSelectors.getAllIngredients));

  constructor(private store: Store<MenuState.State>) {}

  ngOnInit() {
    this.store.dispatch(new MenuActions.LoadMenu());
    this.store.dispatch(new OrderActions.LoadIngredients());
  }
}
