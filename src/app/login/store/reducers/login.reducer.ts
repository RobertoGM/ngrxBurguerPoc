import { AuthActionTypes, AuthActionsUnion } from '../actions/login.actions';

export interface State {
  error: string | null;
  loading: boolean;
}

export const initialState: State = {
  error: null,
  loading: false,
};

export function reducer(state = initialState, action: AuthActionsUnion): State {
  switch (action.type) {
    case AuthActionTypes.Login: {
      return {
        ...state,
        loading : true,
        error: null
      };
    }

    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loading: false,
        error: null
      };
    }

    case AuthActionTypes.LoginFail: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
