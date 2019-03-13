import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Authenticate, User } from '../../login/models/login.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }

  login({ username, password }: Authenticate): Observable<User> {

    if (username !== 'test' && password !== 'test') {
      return throwError('Invalid credentials');
    }

    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
