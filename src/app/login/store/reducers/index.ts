import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../../core/store/reducers';
import * as fromLoginPage from './login.reducer';

export interface LoginState {
  login: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  login: LoginState;
}

export const reducers: ActionReducerMap<LoginState> = {
  login: fromLoginPage.reducer
};

export const selectLoginState = createFeatureSelector<State, LoginState>(
  'login'
);
