import { createSelector } from '@ngrx/store';
import { selectLayoutState } from '../reducers';
import * as fromLayout from '../reducers/layout.reducer';

export const getSidenavOpen = createSelector(
  selectLayoutState,
  fromLayout.getOpenSidenav
);
