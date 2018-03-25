import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { StudiesPage } from '../pages/studies/studies';
import { ModulesPage } from '../pages/modules/modules';
import { LoginPage } from '../pages/login/login';
import { QuestionsPage } from '../pages/questions/questions';
import { ParticipantsPage } from '../pages/participants/participants';
import { ENV } from '../config/env';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {



    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Studies', component: StudiesPage },
      { title: 'Modules', component: ModulesPage },
      { title: 'Questions', component: QuestionsPage },
      { title: 'Participants', component: ParticipantsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
