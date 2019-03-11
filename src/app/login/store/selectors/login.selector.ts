import { createSelector } from '@ngrx/store';
import { selectAuthState, AuthState } from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';
import * as fromLoginPage from '../reducers/login.reducer';

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);
export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getLoggedIn
);
export const getUser = createSelector(
  selectAuthStatusState,
  fromAuth.getUser
);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);
export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);
export const getLoginPageLoading = createSelector(
  selectLoginPageState,
  fromLoginPage.getLoading
);
