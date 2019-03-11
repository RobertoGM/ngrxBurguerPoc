import { Action } from '@ngrx/store';
import { Menu } from '../../models/menu.model';

export enum MenuActionTypes {
  LoadMenu = '[Menu] Load menus',
  LoadMenuSuccess = '[Menu] Load menu success',
  LoadMenuFail = '[Menu] Load menu fail'
}

export class LoadMenu implements Action {
  readonly type = MenuActionTypes.LoadMenu;
}

export class LoadMenuSuccess implements Action {
  readonly type = MenuActionTypes.LoadMenuSuccess;

  constructor(public payload: Menu[]) {}
}

export class LoadMenuFail implements Action {
  readonly type = MenuActionTypes.LoadMenuFail;

  constructor(public payload: any) { }
}

export type MenuActionUnion = LoadMenu | LoadMenuSuccess | LoadMenuFail;
