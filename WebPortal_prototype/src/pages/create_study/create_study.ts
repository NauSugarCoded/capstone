import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-create-study',
  templateUrl: 'create_study.html'
})
export class CreateStudyPage {

  public study_fname: string;
  public study_sname: string;
  public study_sdate: string;
  public study_edate: string;
  public study_discription: string;
  constructor(public navCtrl: NavController) {

  }

  submitStudy() {

  }



}
