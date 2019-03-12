import { Ingredient } from '../../models/ingredients.model';
import { OrderActionTypes, OrderActionUnion } from '../actions/orders.actions';
import { Menu } from '../../models/menu.model';

export interface State {
  baseMeatEntities: { [id: number]: Ingredient };
  ingredientEntities: { [id: number]: Ingredient };
  loading: boolean;
  menuSelected: Menu;
  baseMeat: Ingredient;
  ingredients: { [id: number]: Ingredient };
}

export const initialState: State = {
  baseMeatEntities: {},
  ingredientEntities: {},
  loading: false,
  menuSelected: undefined,
  baseMeat: undefined,
  ingredients: {}
};

export function reducer(state = initialState, action: OrderActionUnion): State {
  switch (action.type) {
    case OrderActionTypes.LoadIngredients: {
      return {
        ...state,
        loading: true
      };
    }

    case OrderActionTypes.LoadIngredientsSuccess: {
      const ingredients = action.payload.ingredients;
      const baseMeat = action.payload.baseMeat;

      const ingredientEntities = ingredients.reduce(
        (entities: { [id: number]: Ingredient }, ingredient: Ingredient) => {
          return {
            ...entities,
            [ingredient.id]: ingredient
          };
        },
        { ...state.ingredientEntities }
      );

      const baseMeatEntities = baseMeat.reduce(
        (entities: { [id: number]: Ingredient }, ingredient: Ingredient) => {
          return {
            ...entities,
            [ingredient.id]: ingredient
          };
        },
        { ...state.baseMeatEntities }
      );

      return {
        ...state,
        loading: false,
        ingredientEntities,
        baseMeatEntities
      };
    }

    case OrderActionTypes.SelectMenu: {
      return {
        ...state,
        menuSelected: action.payload,
        ingredients: {},
        baseMeat: undefined
      };
    }

    case OrderActionTypes.SelectBaseMeat: {
      return {
        ...state,
        menuSelected: undefined,
        baseMeat: action.payload
      };
    }

    case OrderActionTypes.SelectIngredient: {
      let entities;
      if (state.ingredients[action.payload.id]) {
        const {
          [action.payload.id]: removed,
          ...ingredientEntities
        } = state.ingredients;
        return {
          ...state,
          ingredients: ingredientEntities
        };
      } else {
        entities = {
          ...state.ingredients,
          [action.payload.id]: action.payload
        };
        return {
          ...state,
          ingredients: entities
        };
      }
    }

    default: {
      return state;
    }
  }
}

export const getOrderLoading = (state: State) => state.loading;
export const getOrderIngredientEntities = (state: State) =>
  state.ingredientEntities;
export const getOrderIngredients = (state: State) => state.ingredients;
export const getOrderBaseMeatEntities = (state: State) =>
  state.baseMeatEntities;
export const getOrderBaseMeat = (state: State) => state.baseMeat;
export const getMenuSelected = (state: State) => state.menuSelected;
