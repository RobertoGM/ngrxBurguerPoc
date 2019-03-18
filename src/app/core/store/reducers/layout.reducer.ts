import { LayoutActionTypes, LayoutActionsUnion } from '../actions/layout.actions';

export interface State {
  sidenavOpen: boolean;
}

export const initialState: State = {
  sidenavOpen: false
};

export function reducer(
  state = initialState,
  action: LayoutActionsUnion
): State {
  switch (action.type) {
    case LayoutActionTypes.OpenCloseSidenav: {
      return {
        ...state,
        sidenavOpen: !state.sidenavOpen,
      };
    }


    default: {
      return state;
    }
  }
}

export const getOpenSidenav = (state: State) => state.sidenavOpen;
