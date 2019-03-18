import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenCloseSidenav = '[Layout] Open/Close sidenav'
}

export class OpenCloseSidenav implements Action {
  readonly type = LayoutActionTypes.OpenCloseSidenav;
}

export type LayoutActionsUnion = OpenCloseSidenav;
