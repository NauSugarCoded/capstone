import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-create-study',
  templateUrl: 'create_study.html'
})

export class CreateStudyPage {

  public study_fname: string;
  public study_sname: string;
  public study_sdate: string;
  public study_edate: string;
  public study_description: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  submitStudy() {
    var study_database = firebase.database().ref("Studies/" + this.study_sname).set({
      Abstract: this.study_description,
      EndDate: this.study_edate,
      FullName: this.study_fname,
      StartDate: this.study_sdate
    });

    this.toastCtrl.create({
      message: "Study Created",
      duration: 9000,
      position: 'top'
    }).present();

  }



}
