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
  public studies: any = [];
  public end_studies: any = [];

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

       var i = 0;
       var currentDay = new Date();
       for(i; i < this.locations.length; i++)
       {
         if(this.email == this.locations[i].owner)
         {
           var location_end = new Date(this.locations[i].end_date);
           if(currentDay > location_end)
           {
             this.end_studies.push(this.locations[i]);
           }
           else
           {
             this.studies.push(this.locations[i]);
           }
         }
       }

     })
     .catch();
  }

}
