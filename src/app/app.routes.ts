import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { signinGuard } from './guards/signin.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [signinGuard]
  }
];
