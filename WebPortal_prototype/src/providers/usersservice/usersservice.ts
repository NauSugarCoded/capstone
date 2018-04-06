import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/*
  Generated class for the UsersserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersserviceProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;
  public email: string;

  constructor() {
    console.log('Hello UsersserviceProvider Provider');

    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('Users');
  }

  loginUserService(email: string, password: string): any {
    this.email = email;
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUserService(email:string, password: string): any {

    return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) => {
      //sign in the user
      this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser) => {
      //successful login, create user profile
      });
    });

  }

  logoutUserService() {
    this.fireAuth.signOut();
  }

  returnUser(): string
  {
    let email = firebase.auth().currentUser.email;
    return email;
  }

}
