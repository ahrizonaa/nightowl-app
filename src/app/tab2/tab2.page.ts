import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

import { AngularIonicSocialLogin } from 'angular-ionic-social-login';

import { AccountService } from '@ahrizona/common';
import { ProviderUser } from '@ahrizona/common/lib/interfaces/IAccountService';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    AngularIonicSocialLogin,
  ],
})
export class Tab2Page {
  constructor(private account: AccountService) {
  }

  googleUserReceived(user: ProviderUser) {
    console.log(user);
    this.account.SignIn(user, 'Google', 'home');
  }

  facebookUserReceived(user: ProviderUser) {
    console.log(user);
    this.account.SignIn(user, 'Facebook', 'home');
  }
}
