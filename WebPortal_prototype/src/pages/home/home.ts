import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import { DatabaseProvider } from '../../providers/database/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public _COLL = "Studies";
  public locations: any;
  public email: string;

  constructor(public navCtrl: NavController,
              public _US:     UsersserviceProvider,
              private _DB           : DatabaseProvider) {

  }

  ionViewDidEnter()
  {
    this.retrieveCollection();
    this.email = this._US.returnUser();
  }


  retrieveCollection() : void
  {
     this._DB.getStudies(this._COLL)
     .then((data) =>
     {
       this.locations = data;

     })
     .catch();
  }

}
