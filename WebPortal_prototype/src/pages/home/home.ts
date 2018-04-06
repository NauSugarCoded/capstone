import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public _US:     UsersserviceProvider) {

  }

  logoutUser() {
    this._US.logoutUserService();
    this.navCtrl.push(LoginPage);
  }

}
