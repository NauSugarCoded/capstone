import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StudiesPage } from '../pages/studies/studies';
import { CreateStudyPage } from '../pages/create_study/create_study';
import { ModulesPage } from '../pages/modules/modules';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { QuestionsPage } from '../pages/questions/questions';
import { CreateQuestionPage } from '../pages/create_question/create_question';
import { ParticipantsPage } from '../pages/participants/participants';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';
import { DatabaseProvider } from '../providers/database/database';

var iceAccount = require("../capstone-sugar-firebase-adminsdk-mbprx-a6251a0043.json");

// Initialize Firebase
export const config = {
  apiKey: "AIzaSyC_Y1zWA0W4LTAr0jE7tYX-bPfbK3B51QI",
  authDomain: "capstone-sugar.firebaseapp.com",
  databaseURL: "https://capstone-sugar.firebaseio.com",
  projectId: "capstone-sugar",
  storageBucket: "capstone-sugar.appspot.com",
  messagingSenderId: "714682249068",
  credential: admin.credential.cert(iceAccount)
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudiesPage,
    ModulesPage,
    LoginPage,
    SignupPage,
    QuestionsPage,
    ParticipantsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudiesPage,
    ModulesPage,
    LoginPage,
    SignupPage,
    QuestionsPage,
    ParticipantsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersserviceProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
