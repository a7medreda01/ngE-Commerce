import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

function isTokenValid(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token || !isTokenValid(token)) {
    localStorage.removeItem('token');

    return router.createUrlTree(['/login'], {
      queryParams: { returnUrl: state.url }
    });
  }

  return true;
};

export const guestGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token && isTokenValid(token)) {
    return router.createUrlTree(['/']);
  }

  return true;
};