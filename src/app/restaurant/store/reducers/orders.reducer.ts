import { Ingredient } from '../../models/ingredients.model';
import { OrderActionTypes, OrderActionUnion } from '../actions/orders.actions';
import { Menu } from '../../models/menu.model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

interface BaseMeatState extends EntityState<Ingredient> {}
interface IngredientState extends EntityState<Ingredient> {}
interface IngredientSelectedState extends EntityState<Ingredient> {}

export interface State {
  baseMeatEntities: BaseMeatState;
  ingredientEntities: IngredientState;
  loading: boolean;
  menuSelected: Menu;
  baseMeat: Ingredient;
  ingredients: IngredientSelectedState;
}

export const adapterBaseMeat = createEntityAdapter<Ingredient>();
export const adapterIngredients = createEntityAdapter<Ingredient>();
export const adapterIngredientSelected = createEntityAdapter<Ingredient>();

export const initialState: State = {
  baseMeatEntities: adapterBaseMeat.getInitialState(),
  ingredientEntities: adapterIngredients.getInitialState(),
  loading: false,
  menuSelected: undefined,
  baseMeat: undefined,
  ingredients: adapterIngredientSelected.getInitialState()
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
      // const ingredients = action.payload.ingredients;
      // const baseMeat = action.payload.baseMeat;

      // const ingredientEntities = ingredients.reduce(
      //   (entities: { [id: number]: Ingredient }, ingredient: Ingredient) => {
      //     return {
      //       ...entities,
      //       [ingredient.id]: ingredient
      //     };
      //   },
      //   { ...state.ingredientEntities }
      // );

      // const baseMeatEntities = baseMeat.reduce(
      //   (entities: { [id: number]: Ingredient }, ingredient: Ingredient) => {
      //     return {
      //       ...entities,
      //       [ingredient.id]: ingredient
      //     };
      //   },
      // { ...state.baseMeatEntities }

      // );
      return {
        ...state,
        ingredientEntities: adapterIngredients.addMany(
          action.payload.ingredients,
          state.ingredientEntities
        ),
        baseMeatEntities: adapterBaseMeat.addMany(
          action.payload.baseMeat,
          state.baseMeatEntities
        )
      };

      // return {
      //   ...state,
      //   loading: false,
      //   ingredientEntities,
      //   baseMeatEntities
      // };
    }

    case OrderActionTypes.SelectMenu: {
      return {
        ...state,
        menuSelected: action.payload,
        ingredients: adapterIngredientSelected.removeAll(state.ingredients),
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
      return {
        ...state,
        menuSelected: undefined,
        ingredients: adapterIngredientSelected.addOne(action.payload, state.ingredients)
      };
    }

    case OrderActionTypes.RemoveIngredient: {
      return {
        ...state,
        menuSelected: undefined,
        ingredients: adapterIngredientSelected.removeOne(action.payload.id, state.ingredients)
      };
    }

    default: {
      return state;
    }
  }
}

export const getOrderLoading = (state: State) => state.loading;
export const getState = (state: State) => state;
export const getOrderIngredientEntities = (state: State) =>
  state.ingredientEntities;
export const getOrderIngredients = (state: State) => state.ingredients;
export const getOrderBaseMeatEntities = (state: State) =>
  state.baseMeatEntities;
export const getOrderBaseMeat = (state: State) => state.baseMeat;
export const getMenuSelected = (state: State) => state.menuSelected;
