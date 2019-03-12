import { createSelector } from '@ngrx/store';
import { selectMenuState, RestaurantState } from '../reducers';
import * as fromOrder from '../reducers/orders.reducer';
import { Ingredient } from '../../models/ingredients.model';
import { Menu } from '../../models/menu.model';

export const selectOrderStoreState = createSelector(
  selectMenuState,
  (state: RestaurantState) => state.order
);

export const getIngredients = createSelector(
  selectOrderStoreState,
  fromOrder.getOrderIngredientEntities
);

export const getAllIngredients = createSelector(
  getIngredients,
  (entities: { [id: number]: Ingredient }) =>
    Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getBaseMeats = createSelector(
  selectOrderStoreState,
  fromOrder.getOrderBaseMeatEntities
);

export const getAllBaseMeats = createSelector(
  getBaseMeats,
  (entities: { [id: number]: Ingredient }) =>
    Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getSelectedIngredients = createSelector(
  selectOrderStoreState,
  fromOrder.getOrderIngredients
);

export const getAllSelectedIngredients = createSelector(
  getSelectedIngredients,
  (entities: { [id: number]: Ingredient }) =>
    Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getSelectedBaseMeat = createSelector(
  selectOrderStoreState,
  fromOrder.getOrderBaseMeat
);

export const getSelectedMenu = createSelector(
  selectOrderStoreState,
  fromOrder.getMenuSelected
);

export const getOrderLoading = createSelector(
  selectOrderStoreState,
  fromOrder.getOrderLoading
);

export const getOrderPrice = createSelector(
  getAllSelectedIngredients,
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
