import { Menu } from '../../models/menu.model';
import { MenuActionUnion, MenuActionTypes } from '../actions/menu.actions';

export interface State {
  entities: { [id: number]: Menu };
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: MenuActionUnion): State {
  switch (action.type) {
    case MenuActionTypes.LoadMenu: {
      return {
        ...state,
        loading: true
      };
    }

    case MenuActionTypes.LoadMenuSuccess: {
      const menus = action.payload;
      const entities = menus.reduce(
        (menuentities: { [id: number]: Menu }, menu: Menu) => {
          return {
            ...menuentities,
            [menu.id]: menu
          };
        },
        { ...state.entities }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    default: {
      return state;
    }
  }
}

export const getMenuLoading = (state: State) => state.loading;
export const getMenuLoaded = (state: State) => state.loaded;
export const getMenuEntities = (state: State) => state.entities;
