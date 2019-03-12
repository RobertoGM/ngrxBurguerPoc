import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MenuDataService } from '../../services/menu-data';
import {
  OrderActionTypes,
  LoadIngredientsSuccess,
  LoadIngredientsFail
} from '../actions/orders.actions';
import { OrderIngredients } from '../../models/order.model';

@Injectable()
export class OrderEffects {
  @Effect()
  LoadOrderIngredients$ = this.actions$.pipe(
    ofType(OrderActionTypes.LoadIngredients),
    exhaustMap(() =>
      this.menuDataService.retrieveOrderIngredients().pipe(
        map(
          (orderIngredients: OrderIngredients) =>
            new LoadIngredientsSuccess(orderIngredients)
        ),
        catchError(error => of(new LoadIngredientsFail(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private menuDataService: MenuDataService
  ) {}
}
