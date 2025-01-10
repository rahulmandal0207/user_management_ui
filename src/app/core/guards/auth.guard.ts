import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loggedUser = localStorage.getItem('loggedUser');
  const router = inject(Router);
  if (loggedUser != null) {
    return true;
  }
  router.navigateByUrl('login');
  return false;
};
