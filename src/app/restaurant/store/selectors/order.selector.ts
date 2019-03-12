import { createSelector } from '@ngrx/store';
import { selectMenuState, RestaurantState } from '../reducers';
import * as fromOrder from '../reducers/orders.reducer';
import { Ingredient } from '../../models/ingredients.model';

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
