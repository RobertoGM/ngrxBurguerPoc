import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../core/store/reducers';
import * as fromMenu from './menu.reducer';

export interface RestaurantState {
  menu: fromMenu.State;
}

export interface State extends fromRoot.State {
  restaurant: RestaurantState;
}

export const reducers: ActionReducerMap<RestaurantState> = {
  menu: fromMenu.reducer
};

export const selectMenuState = createFeatureSelector<State, RestaurantState>('restaurant');
