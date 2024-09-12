import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  message: string = "Vous êtes déconnecté."
  name: string
  password: string

  constructor(protected authService: AuthService, private router: Router) {
  }

  setMessage() {
    if (this.authService.isLoggedIn) {
      this.message = "Vous êtes connecté."
    } else {
      this.message = "Identifiant ou mot de passe incorrect."
    }
  }

  login() {
    this.message = "Tentative de connexion en cours..."
    this.authService.login(this.name, this.password).subscribe(
        (isLoggedIn: boolean) => {
          this.setMessage()
          if (isLoggedIn)
            this.router.navigate(['/pokemons']);
          else {
            this.password = ''
            this.router.navigate(['/login']);
          }
        }
    )
  }

  logout() {
    this.authService.logout()
    this.message = "Vous êtes déconnecté."
  }



}
