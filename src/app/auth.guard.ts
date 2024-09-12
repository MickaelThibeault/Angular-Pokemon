import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const authGuard: CanActivateFn = () => {
  const authSerice = inject(AuthService)
  const router = inject(Router)

  if (authSerice.isLoggedIn) {
    return true
  } else {
    router.navigate(['/login'])
    return false
  }

};
