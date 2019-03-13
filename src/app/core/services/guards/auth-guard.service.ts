import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as AuthActions from '../../store/actions/auth.actions';
import * as fromAuth from '../../../login/store/reducers';
import * as authSelectors from '../../store/selectors/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(authSelectors.getLoggedIn),
      map(authed => {
        if (!authed) {
          this.store.dispatch(new AuthActions.AuthRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}