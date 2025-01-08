import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Check if `localStorage` is available
  const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

  const isLoggedIn = isBrowser ? !!localStorage.getItem('authToken') : false;

  if (!isLoggedIn) {
    // If not logged in, redirect to the login page
    router.navigate(['/login']);
    return false;
  }

  return true; // Allow access if logged in
};
