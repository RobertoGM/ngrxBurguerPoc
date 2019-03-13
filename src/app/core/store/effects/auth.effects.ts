import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { AuthActionTypes } from 'src/app/core/store/actions/auth.actions';

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  authSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/restaurant']))
  );

  @Effect({ dispatch: false })
  authRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.AuthRedirect, AuthActionTypes.Logout),
    tap(() => {
      this.router.navigate(['/login']);
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) {}
}
