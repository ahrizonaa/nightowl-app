import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { AngularIonicSocialLogin } from 'angular-ionic-social-login';
import { ProviderUser } from 'boundless-apps-common/lib/interfaces/IAccountService';
import { AccountService } from 'boundless-apps-common';

import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [IonContent, AngularIonicSocialLogin],
})
export class SigninComponent {
  googleClientKey: string = env.googleClientKey;
  facebookClientKey: string = env.facebookClientKey;
  constructor(private account: AccountService) {}

  googleUserReceived(user: ProviderUser) {
    this.account.SignIn(user, 'Google', '/');
  }

  facebookUserReceived(user: ProviderUser) {
    this.account.SignIn(user, 'Facebook', '/');
  }
}
