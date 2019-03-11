import { createSelector } from '@ngrx/store';
import { selectMenuState, RestaurantState } from '../reducers';
import * as fromMenu from '../reducers/menu.reducer';
import { Menu } from '../../models/menu.model';

export const selectMenuStoreState = createSelector(
  selectMenuState,
  (state: RestaurantState) => state.menu
);

export const getMenuEntities = createSelector(
  selectMenuStoreState,
  fromMenu.getMenuEntities
);

export const getAllMenus = createSelector(
  getMenuEntities,
  (entities: { [id: number]: Menu }) =>
    Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getMenuLoading = createSelector(
  selectMenuStoreState,
  fromMenu.getMenuLoading
);
