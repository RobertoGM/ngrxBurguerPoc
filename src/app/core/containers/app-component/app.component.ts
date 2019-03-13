import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/login/models/login.model';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as AuthSelectors from '../../store/selectors/auth.selector';
import * as AuthActions from '../../store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  userLogged$: Observable<User> = this.store.pipe(select(AuthSelectors.getUser));

  constructor(private store: Store<fromRoot.State>) {}

  logout(): void {
    this.store.dispatch(new AuthActions.Logout());
  }
}
