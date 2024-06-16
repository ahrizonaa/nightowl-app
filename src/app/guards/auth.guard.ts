import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AccountService } from 'boundless-apps-common';
export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);

  if (accountService.currentUser && accountService.currentUser.email) {
    return true;
  }

  const router = inject(Router);

  return router.parseUrl('/signin');
};
