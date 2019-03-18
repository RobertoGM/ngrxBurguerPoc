import { Menu } from '../../models/menu.model';
import { MenuActionUnion, MenuActionTypes } from '../actions/menu.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Menu> {
  loaded: boolean;
  loading: boolean;
}

export const adapter = createEntityAdapter<Menu>();

const initialState: State = adapter.getInitialState({
  loaded: false,
  loading: false
});

export function reducer(state = initialState, action: MenuActionUnion): State {
  switch (action.type) {
    case MenuActionTypes.LoadMenu: {
      return {
        ...state,
        loading: true
      };
    }

    case MenuActionTypes.LoadMenuSuccess: {
      return adapter.addAll(action.payload, state);
    }

    default: {
      return state;
    }
  }
}

export const getMenuLoading = (state: State) => state.loading;
export const getMenuLoaded = (state: State) => state.loaded;
