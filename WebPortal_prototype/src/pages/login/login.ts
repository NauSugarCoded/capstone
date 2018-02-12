import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UsersserviceProvider]
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(
    public usersService: UsersserviceProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams) {

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          this.navCtrl.push(HomePage);
          // ...
        }
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin() {

    var that = this;

    var loader = this.loadingCtrl.create({
      content: "Please wait...."
    });
    loader.present();


    this.usersService.loginUserService(this.email, this.password).then(authData => {
      //successful
      loader.dismiss();
      that.navCtrl.setRoot(HomePage);
    }, error => {
      loader.dismiss();
        //Unable to log in
        let toast = this.toastCtrl.create({
          message: error,
          duration: 9000,
          position: 'top'
        });
        toast.present();

    that.password = "" //empty password field
    });

  }

  forgotPassword() {

  }

  redirectToSignup() {
    this.navCtrl.push(SignupPage);
  }




}
