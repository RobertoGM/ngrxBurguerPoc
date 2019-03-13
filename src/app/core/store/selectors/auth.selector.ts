import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getLoggedIn = createSelector(
  selectAuthState,
  fromAuth.getLoggedIn
);

export const getUser = createSelector(
  selectAuthState,
  fromAuth.getUser
);
