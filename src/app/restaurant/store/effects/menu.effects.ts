import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { MenuActionTypes, LoadMenuSuccess, LoadMenuFail } from '../actions/menu.actions';
import { MenuDataService } from '../../services/menu-data';
import { Menu } from '../../models/menu.model';


@Injectable()
export class MenuEffects {
  @Effect()
  LoadMenu$ = this.actions$.pipe(
    ofType(MenuActionTypes.LoadMenu),
    exhaustMap(() =>
      this.menuDataService.retrieveMenus().pipe(
        map((menus: Menu[]) => new LoadMenuSuccess(menus)),
        catchError(error => of(new LoadMenuFail(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private menuDataService: MenuDataService
  ) {}
}
