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
    case LayoutActionTypes.OpenSidenav: {
      return {
        ...state,
        sidenavOpen: true,
      };
    }

    case LayoutActionTypes.CloseSidenav: {
      return {
        ...state,
        sidenavOpen: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const getOpenSidenav = (state: State) => state.sidenavOpen;
