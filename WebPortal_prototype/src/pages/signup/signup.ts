import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { HomePage } from '../home/home';

import * as firebase from 'firebase';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UsersserviceProvider]
})
export class SignupPage {

  public email: string;
  public password: any;
  public phone: any;
  public first_name: any;
  public last_name: any;

  constructor(
    public usersserviceProvider: UsersserviceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignup() {

    var that = this;

    var loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();

    this.usersserviceProvider.signupUserService(this.email, this.password).then(authData => {
      loader.dismiss();
      that.navCtrl.setRoot(HomePage);

    }, error => {
      loader.dismiss();

      let toast = this.toastCtrl.create({
        message: error,
        duration: 9000,
        position: top
      });

      toast.present();

      that.password = ""
    });




  }

}
