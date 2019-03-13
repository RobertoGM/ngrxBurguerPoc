import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Authenticate } from '../../models/login.model';

import * as LoginSelectors from '../../store/selectors/login.selector';
import * as AuthSelectors from '../../../core/store/selectors/auth.selector';
import * as LoginState from '../../store/reducers';
import * as AuthActions from '../../store/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  pending$ = this.store.pipe(select(LoginSelectors.getLoginPageLoading));
  error$ = this.store.pipe(select(LoginSelectors.getLoginPageError));
  user$ = this.store.pipe(select(AuthSelectors.getUser));

  constructor(private store: Store<LoginState.State>) {}

  ngOnInit() {}

  onSubmit($event: Authenticate) {
    this.store.dispatch(new AuthActions.Login($event));
  }
}
