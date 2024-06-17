import { Component } from "@angular/core";
import { IonContent } from "@ionic/angular/standalone";
import { AngularIonicSocialLogin } from "angular-ionic-social-login";
import {
  Provider,
  ProviderUser,
  UserProfile,
} from "@ahrizona/common/lib/interfaces/IAccountService";
import { AccountService } from "@ahrizona/common";

import { environment as env } from "src/environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
  standalone: true,
  imports: [IonContent, AngularIonicSocialLogin],
})
export class SigninComponent {
  googleClientKey: string = env.googleClientKey;
  facebookClientKey: string = env.facebookClientKey;
  constructor(
    private account: AccountService,
    private router: Router,
  ) {}

  googleUserReceived(user: ProviderUser) {
    this.signInWithSocial(user, "Google");
  }

  facebookUserReceived(user: ProviderUser) {
    this.signInWithSocial(user, "Facebook");
  }

  signInWithSocial(user: ProviderUser, provider: Provider) {
    this.account
      .SignIn(user, provider, "tab1")
      .subscribe(async (result: any) => {
        if (!result || !result.user) {
          let names = this.account.pendingUser?.name.split(/\s+/);
          let profile: UserProfile = {
            firstName: names!.length > 0 ? names![0] : "",
            lastName: names!.length > 1 ? names![1] : "",
            phoneNumber: "",
            phoneNumberCountry: undefined,
            birthdate: "",
            country: undefined,
          };
          this.account.SignUp(profile).subscribe(res => {
            if (!res || !res.email) {
              this.account.currentUser = null
              this.account.pendingUser = null
            } else {
              this.router.navigate(['/tab1']);
            }
          })
        } else {
          this.router.navigate(['/tab1']);
        }
        
      });
  }
}
