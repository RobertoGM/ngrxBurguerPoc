import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

import { AuthSuccess } from '../../../core/store/actions/auth.actions';
import { Login, LoginActionTypes, LoginSuccess, LoginFail } from '../../../login/store/actions/login.actions';
import { Authenticate, User } from '../../../login/models/login.model';
import { AuthService } from '../../../core/services/auth.service';

@Injectable()
export class LoginEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(LoginActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth: Authenticate) =>
      this.authService.login(auth).pipe(
        mergeMap((user: User) => {
          return [new AuthSuccess({ user }), new LoginSuccess()];
        }),
        catchError(error => of(new LoginFail(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
