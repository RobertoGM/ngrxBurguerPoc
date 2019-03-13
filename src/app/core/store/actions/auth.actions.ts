import { Action } from '@ngrx/store';
import { User } from '../../../login/models/login.model';

export enum AuthActionTypes {
  LoginSuccess = '[Auth] Login Success',
  Logout = '[Auth] Logout',
  AuthRedirect = '[Auth] Auth Redirect'
}

export class AuthSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: User }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class AuthRedirect implements Action {
  readonly type = AuthActionTypes.AuthRedirect;
}

export type AuthActionUnion = AuthSuccess | Logout | AuthRedirect;
