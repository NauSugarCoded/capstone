import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular'
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import * as firebase from 'firebase';
/**
 * Generated class for the ForgotPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot_pass.html',
})
export class ForgotPassPage {

  public email: string;

  constructor(public navCtrl    : NavController,
              public navParams  : NavParams,
              private _ALERT    : AlertController,
              private _US       : UsersserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPassPage');
  }

  sendResetPassword() {
    this._US.sendResetPassword(this.email);
    this.displayAlert('Success', 'An email has been sent to: ' + this.email);
  }


  displayAlert(title      : string,
               message    : string) : void
  {
     let alert : any     = this._ALERT.create({
        title      : title,
        subTitle   : message,
        buttons    : ['Got it!']
     });
     alert.present();
  }

}
