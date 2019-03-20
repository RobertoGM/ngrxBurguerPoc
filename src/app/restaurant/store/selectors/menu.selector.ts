import { createSelector } from '@ngrx/store';
import { selectMenuState, RestaurantState } from '../reducers';
import * as fromMenu from '../reducers/menu.reducer';

export const selectMenuStoreState = createSelector(
  selectMenuState,
  (state: RestaurantState) => state.menu
);

export const getMenuLoading = createSelector(
  selectMenuStoreState,
  fromMenu.getMenuLoading
);

export const { selectAll } = fromMenu.adapter.getSelectors(
  selectMenuStoreState
);
