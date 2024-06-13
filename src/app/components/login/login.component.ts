import { Component, OnInit } from '@angular/core';
import { AngularIonicSocialLogin } from 'angular-ionic-social-login';
import { AccountService } from 'boundless-apps-common';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonContent, AngularIonicSocialLogin],
})
export class LoginComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    console.log(this.accountService);
  }
}
