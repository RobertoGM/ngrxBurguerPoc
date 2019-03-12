import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../core/store/reducers';
import * as fromMenu from './menu.reducer';
import * as fromOrder from './orders.reducer';

export interface RestaurantState {
  menu: fromMenu.State;
  order: fromOrder.State;
}

export interface State extends fromRoot.State {
  restaurant: RestaurantState;
}

export const reducers: ActionReducerMap<RestaurantState> = {
  menu: fromMenu.reducer,
  order: fromOrder.reducer
};

export const selectMenuState = createFeatureSelector<State, RestaurantState>('restaurant');
