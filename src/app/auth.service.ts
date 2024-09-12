import { Injectable } from '@angular/core';
import {delay, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false
  redirectUrl: string
  constructor() { }

  login(name: string, password: string): Observable<boolean> {
    const isLogged = (name == 'pikachu' && password == 'pikachu')
    return of(isLogged).pipe(
        delay(1000),
        tap(isLogged => this.isLoggedIn = isLogged)
    )
  }

  logout() {
    this.isLoggedIn = false
  }
}
