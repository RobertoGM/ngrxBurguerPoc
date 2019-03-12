import { Action } from '@ngrx/store';
import { Ingredient } from '../../models/ingredients.model';
import { OrderIngredients } from '../../models/order.model';
import { Menu } from '../../models/menu.model';

export enum OrderActionTypes {
  LoadIngredients = '[Orders] Load ingredients',
  LoadIngredientsSuccess = '[Orders] Load ingredients success',
  LoadIngredientsFail = '[Orders] Load ingredients fail',
  SelectIngredient = '[Orders] Ingredient selected',
  RemoveIngredient = '[Orders] Ingredient removed',
  SelectBaseMeat = '[Orders] Base meat selected',
  SelectMenu = '[Orders] Menu selected'
}


export class LoadIngredients implements Action {
  readonly type = OrderActionTypes.LoadIngredients;
}

export class LoadIngredientsSuccess implements Action {
  readonly type = OrderActionTypes.LoadIngredientsSuccess;

  constructor(public payload: OrderIngredients) {}
}

export class LoadIngredientsFail implements Action {
  readonly type = OrderActionTypes.LoadIngredientsFail;

  constructor(public payload: any) {}
}

export class SelectMenu implements Action {
  readonly type = OrderActionTypes.SelectMenu;

  constructor(public payload: Menu) { }
}

export class SelectIngredient implements Action {
  readonly type = OrderActionTypes.SelectIngredient;

  constructor(public payload: Ingredient) {}
}

export class RemoveIngredient implements Action {
  readonly type = OrderActionTypes.RemoveIngredient;

  constructor(public payload: Ingredient) { }
}

export class SelectBaseMeat implements Action {
  readonly type = OrderActionTypes.SelectBaseMeat;

  constructor(public payload: Ingredient) {}
}

export type OrderActionUnion =
  | LoadIngredients
  | LoadIngredientsSuccess
  | LoadIngredientsFail
  | SelectMenu
  | SelectIngredient
  | RemoveIngredient
  | SelectBaseMeat;
