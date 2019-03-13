import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from './auth.reducer';
import * as fromLayout from './layout.reducer';

export interface State {
  router: fromRouter.RouterReducerState;
  auth: fromAuth.State;
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  auth: fromAuth.reducer,
  layout: fromLayout.reducer
};

export const selectAuthState = createFeatureSelector<State, fromAuth.State>(
  'auth'
);

export const selectLayoutState = createFeatureSelector<State, fromLayout.State>(
  'layout'
);
