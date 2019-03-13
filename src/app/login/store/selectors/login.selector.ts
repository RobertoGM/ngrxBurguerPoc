import { createSelector } from '@ngrx/store';
import { selectLoginState, LoginState } from '../reducers';
import * as fromLogin from '../reducers/login.reducer';

export const selectLoginPageState = createSelector(
  selectLoginState,
  (state: LoginState) => state.login
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLogin.getError
);
export const getLoginPageLoading = createSelector(
  selectLoginPageState,
  fromLogin.getLoading
);
