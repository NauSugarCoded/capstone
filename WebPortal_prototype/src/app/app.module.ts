import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { StudiesPageModule } from '../pages/studies/studies.module';
import { CreateStudyPageModule } from '../pages/create_study/create_study.module';
import { ModulesPageModule } from '../pages/modules/modules.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { ForgotPassPageModule } from '../pages/forgot_pass/forgot_pass.module';
import { QuestionsPageModule } from '../pages/questions/questions.module';
import { CreateQuestionPageModule } from '../pages/create_question/create_question.module';
import { ParticipantsPageModule } from '../pages/participants/participants.module';


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
  ],
  imports: [
    HomePageModule,
    StudiesPageModule,
    ModulesPageModule,
    SignupPageModule,
    QuestionsPageModule,
    ParticipantsPageModule,
    BrowserModule,
    HttpClientModule,
    ForgotPassPageModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
