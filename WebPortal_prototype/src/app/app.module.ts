import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreateStudyPage } from '../pages/create_study/create_study';
import { ModulesPage } from '../pages/modules/modules';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';


// Initialize Firebase
export const config = {
  apiKey: "AIzaSyC_Y1zWA0W4LTAr0jE7tYX-bPfbK3B51QI",
  authDomain: "capstone-sugar.firebaseapp.com",
  databaseURL: "https://capstone-sugar.firebaseio.com",
  projectId: "capstone-sugar",
  storageBucket: "capstone-sugar.appspot.com",
  messagingSenderId: "714682249068"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CreateStudyPage,
    ModulesPage,
    LoginPage,
    SignupPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CreateStudyPage,
    ModulesPage,
    LoginPage,
    SignupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider
  ]
})
export class AppModule {}
