import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';


@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html'
})

export class ParticipantsPage {


   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description      Defines the name of the database collection
    */
   private _COLL 		: string 			= "Participants";
   private _SD      : string      = "Studies";


   /**
    * @name _DOC
    * @type {string}
    * @private
    * @description      Defines the initial document ID for the database collection
    */
   private _DOC 		: string 			= "Xy76Re34Sd";




   /**
    * @name _CONTENT
    * @type {any}
    * @private
    * @description      Used to store/provide the initial document data for the database collection
    */
   private _CONTENT  	: any;



   /**
    * @name locations
    * @type {any}
    * @public
    * @description      Property to store the returned documents from the database collection
    */
   public locations     : any;
   public local         : any;
   public studs         : any;
   public email         : string;
   public searchbar     : any;

   public flag          : boolean = false;
   public firstFlag     : boolean = false;
   public secondFlag    : boolean = false;
   public link          : string;


   constructor(public navCtrl  : NavController,
               private _DB     : DatabaseProvider,
               private _US     : UsersserviceProvider,
               private _ALERT  : AlertController)
   {
      this._CONTENT = {
         email : "",
         name : "",
         owner : "",
         phone : "",
         study: "",
         sleep_start: "",
         sleep_end: ""
      };
   }




   /**
    * Retrieve all documents from the specified collection using the
    * retrieveCollection method when the view is entered
    *
    * @public
    * @method ionViewDidEnter
    * @return {none}
    */
   ionViewDidEnter()
   {
      this.retrieveCollection();
      this.retrieveStudies();
      this.email = this._US.returnUser();
      this.searchbar = '';
   }




   /**
    * Creates the collection and populates that with an initial document
    * using the createAndPopulateDocument method of the DatabaseProvider
    * service
    *
    * @public
    * @method generateCollectionAndDocument
    * @return {none}
    */
   generateCollectionAndDocument() : void
   {
      this._DB.createAndPopulateDocument(this._COLL,
                                         this._DOC,
                                         this._CONTENT)
      .then((data : any) =>
      {
         console.dir(data);
      })
      .catch((error : any) =>
      {
         console.dir(error);
      });
   }




   /**
    * Retrieve all documents from the specified collection using the
    * getDocuments method of the DatabaseProvider service
    *
    * @public
    * @method retrieveCollection
    * @return {none}
    */
   retrieveCollection() : void
   {
      this._DB.getParticipants(this._COLL)
      .then((data) =>
      {

         // IF we don't have any documents then the collection doesn't exist
         // so we create it!
         if(data.length === 0)
         {
            this.generateCollectionAndDocument();
         }

         // Otherwise the collection does exist and we assign the returned
         // documents to the public property of locations so this can be
         // iterated through in the component template
         else
         {
            this.locations = data;
            this.local = data;
         }
      })
      .catch();
   }

   retrieveStudies() : void
   {
      this._DB.getStudies(this._SD)
      .then((data) =>
      {

         // IF we don't have any documents then the collection doesn't exist
         // so we create it!
         if(data.length === 0)
         {
            this.generateCollectionAndDocument();
         }

         // Otherwise the collection does exist and we assign the returned
         // documents to the public property of locations so this can be
         // iterated through in the component template
         else
         {
            this.studs = data;
         }
      })
      .catch();
   }




   /**
    * Navigate to the manage-participant component to begin adding a new document
    *
    * @public
    * @method addParticipant
    * @return {none}
    */
   addParticipant() : void
   {
      this.navCtrl.push('create_participant');
   }



   /**
    * Update a document by passing the data to the manage-document component
    *
    * @public
    * @method updateDocument
    * @param  obj          {Object}           The document data we wish to update
    * @return {none}
    */
   updateDocument(obj) : void
   {
      let params : any = {
         collection   : this._COLL,
         location     : obj
      };
      this.navCtrl.push('create_participant', { record : params, isEdited : true });
   }



   /**
    * Delete a document from the Cloud Firestore collection using the
    * deleteDocument method of the DatabaseProvider service
    *
    * @public
    * @method deleteDocument
    * @param  obj          {Object}           The document ID for the document we wish to delete
    * @return {none}
    */
   deleteDocument(obj) : void
   {
      this._DB.deleteDocument(this._COLL,
      						obj.id)
      .then((data : any) =>
      {
         this.displayAlert('Success', 'The participant ' + obj.name + ' was successfully removed');
      })
      .catch((error : any) =>
      {
         this.displayAlert('Error', error.message);
      });
   }

   resetLocations()
   {
     this.locations = this.local;
   }

   searchParticipants(input : any){

     this.resetLocations();

     let val = input.target.value;
     if(val && val.trim() != '') {
       this.locations = this.locations.filter((participant) => {
         return(participant.study.toLowerCase().indexOf(val.toLowerCase()) > -1);
       })
     }
   }

   exportAnswers_Modules(){
     this._DB.exportParticipants(this.email);
     this.flag = true;
   }

   setLink() : void
   {
     this._DB.downloadParticipants();
     this.firstFlag = true;
   }

   createLink() : void
   {
     this.link = this._DB.returnURL();
     console.log(this.link);
     this.secondFlag = true;
   }

   downloadFile() : void
   {
     window.location.href = this.link["i"];
   }




   /**
    * Provide feedback to user after an operation has succeeded/failed
    *
    * @public
    * @method displayAlert
    * @param  title          {String}           Heading for alert message
    * @param  message        {String}           Content for alert message
    * @return {none}
    */
   displayAlert(title      : string,
                message    : string) : void
   {
      let alert : any     = this._ALERT.create({
         title      : title,
         subTitle   : message,
         buttons    : [{
          text      : 'Got It!',
          handler   : () =>
          {
            this.retrieveCollection();
          }
        }]
      });
      alert.present();
   }

}
