import { createSelector } from '@ngrx/store';
import { selectMenuState, RestaurantState } from '../reducers';
import * as fromOrder from '../reducers/orders.reducer';
import { Ingredient } from '../../models/ingredients.model';
import { Menu } from '../../models/menu.model';

export const selectOrderStoreState = createSelector(
  selectMenuState,
  (state: RestaurantState) => state.order
);

export const selectBaseMeats = createSelector(
  selectMenuState,
  (state: RestaurantState) => state.order.baseMeatEntities
);

export const selectIngredients = createSelector(
  selectMenuState,
  (state: RestaurantState) => state.order.ingredientEntities
);

export const selectIngredientsSelected = createSelector(
  selectMenuState,
  (state: RestaurantState) => state.order.ingredients
);

export const getSelectedBaseMeat = createSelector(
  selectOrderStoreState,
  fromOrder.getOrderBaseMeat
);

export const {
  selectAll: selectAllBaseMeat
} = fromOrder.adapterBaseMeat.getSelectors(selectBaseMeats);

export const {
  selectAll: selectAllIngredients
} = fromOrder.adapterIngredients.getSelectors(selectIngredients);

export const {
  selectAll: selectAllIngredientSelected
} = fromOrder.adapterIngredientSelected.getSelectors(selectIngredientsSelected);

export const getSelectedMenu = createSelector(
  selectOrderStoreState,
  fromOrder.getMenuSelected
);

export const getOrderLoading = createSelector(
  selectOrderStoreState,
  fromOrder.getOrderLoading
);

export const getOrderPrice = createSelector(
  selectAllIngredientSelected,
  getSelectedBaseMeat,
  getSelectedMenu,
  (ingredients: Ingredient[], baseMeat: Ingredient, menu: Menu) => {
    let totalPrice = 0;
    totalPrice += baseMeat ? baseMeat.price : 0;
    totalPrice += menu ? menu.price : 0;
    totalPrice +=
      ingredients.length > 0
        ? ingredients.reduce(
            (sum: number, ingredient: Ingredient) => (sum += ingredient.price),
            0
          )
        : 0;
    return totalPrice;
  }
);
