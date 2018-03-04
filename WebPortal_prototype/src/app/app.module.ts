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
import { SelectModulePage } from '../pages/select_module/select_module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { UsersserviceProvider } from '../providers/usersservice/usersservice';
import { DatabaseProvider } from '../providers/database/database';


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
    StudiesPage,
    ModulesPage,
    LoginPage,
    SignupPage,
    QuestionsPage,
    SelectModulePage,
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
    SelectModulePage,
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
