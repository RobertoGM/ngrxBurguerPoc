import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../core/store/reducers';
import * as fromAuth from './auth.reducer';
import * as fromLoginPage from './login.reducer';

export interface AuthState {
  status: fromAuth.State;
  loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  status: fromAuth.reducer,
  loginPage: fromLoginPage.reducer,
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');
