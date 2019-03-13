import { Action } from '@ngrx/store';
import { Authenticate, User } from '../../models/login.model';

export enum LoginActionTypes {
  Login = '[Login] Login',
  Logout = '[Login] Logout',
  LoginSuccess = '[Login] Login Success',
  LoginFail = '[Login] Login Failure',
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;

  constructor(public payload: Authenticate) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
}

export class LoginFail implements Action {
  readonly type = LoginActionTypes.LoginFail;

  constructor(public payload: any) {}
}

export type LoginActionsUnion =
  | Login
  | LoginSuccess
  | LoginFail;
