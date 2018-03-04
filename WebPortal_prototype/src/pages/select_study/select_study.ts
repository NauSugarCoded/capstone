import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the SelectStudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage({
 	name: "select_study"
 })
@Component({
  selector: 'page-select-study',
  templateUrl: 'select_study.html',
})
export class SelectStudyPage {

  /**
   * @name records
   * @type {object}
   * @public
   * @description     Defines an object for returning documents from Cloud Firestore database
   */
  public records       : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let record = params.get(record);

    this.full_name = record.location.full_name;
    this.short_name = record.location.short_name;
    this.abstract = record.location.abstract;
    this.end_date = record.location.end_date;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectStudyPage');
  }



}
