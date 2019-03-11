import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/login/models/login.model';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as LoginSelectors from '../../../login/store/selectors/login.selector';
import * as LoginActions from '../../../login/store/actions/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  userLogged$: Observable<User> = this.store.pipe(
    select(LoginSelectors.getUser)
  );

  constructor(private store: Store<fromRoot.State>) {}

  logout(): void {
    this.store.dispatch(new LoginActions.Logout());
  }
}
