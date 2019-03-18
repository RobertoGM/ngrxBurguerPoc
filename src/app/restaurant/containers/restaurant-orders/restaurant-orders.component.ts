import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as MenuState from '../../store/reducers';
import * as MenuSelectors from '../../store/selectors/menu.selector';
import * as OrderSelectors from '../../store/selectors/order.selector';
import * as MenuActions from '../../store/actions/menu.actions';
import * as OrderActions from '../../store/actions/orders.actions';
import { Menu } from '../../models/menu.model';
import { Ingredient } from '../../models/ingredients.model';

@Component({
  selector: 'app-restaurant-orders',
  templateUrl: './restaurant-orders.component.html',
  styleUrls: ['./restaurant-orders.component.scss']
})
export class RestaurantOrdersComponent implements OnInit {
  menus$ = this.store.pipe(select(MenuSelectors.selectAll));
  selectedMenu$ = this.store.pipe(select(OrderSelectors.getSelectedMenu));

  baseMeats$ = this.store.pipe(select(OrderSelectors.selectAllBaseMeat));

  selectedBaseMeat$ = this.store.pipe(
    select(OrderSelectors.getSelectedBaseMeat)
  );

  ingredients$ = this.store.pipe(select(OrderSelectors.selectAllIngredients));

  selectedIngredients$ = this.store.pipe(
    select(OrderSelectors.selectAllIngredientSelected)
  );

  getOrderPrice$ = this.store.pipe(select(OrderSelectors.getOrderPrice));

  constructor(private store: Store<MenuState.State>) {}

  ngOnInit() {
    this.store.dispatch(new MenuActions.LoadMenu());
    this.store.dispatch(new OrderActions.LoadIngredients());
  }

  menuSelected(menu: Menu): void {
    this.store.dispatch(new OrderActions.SelectMenu(menu));
  }

  baseMeatSelected(baseMeat: Ingredient): void {
    this.store.dispatch(new OrderActions.SelectBaseMeat(baseMeat));
  }

  ingredientSelected(ingredient: Ingredient): void {
    this.store.dispatch(new OrderActions.SelectIngredient(ingredient));
  }

  ingredientRemoved(ingredient: Ingredient): void {
    this.store.dispatch(new OrderActions.RemoveIngredient(ingredient));
  }
}
