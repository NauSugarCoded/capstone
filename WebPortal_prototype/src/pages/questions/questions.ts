import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {



   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description      Defines the name of the database collection
    */
   private _COLL 		: string 			= "Questions";




   /**
    * @name _DOC
    * @type {string}
    * @private
    * @description      Defines the initial document ID for the database collection
    */
   private _DOC 		: string 			= "Xy76Re34SdFR1";




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

   public email         : string;



   constructor(public navCtrl  : NavController,
               private _DB     : DatabaseProvider,
               private _US     : UsersserviceProvider,
               private _ALERT  : AlertController)
   {
      this._CONTENT = {
         name : "",
         type : "",
         qtext : ""
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
      this.email = this._US.returnUser();
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
      this._DB.getQuestions(this._COLL)
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
         }
      })
      .catch();
   }




   /**
    * Navigate to the manage-document component to begin adding a new document
    *
    * @public
    * @method addDocument
    * @return {none}
    */
   addDocument() : void
   {
      this.navCtrl.push('create_question');
   }

   addRadio() : void
   {
      this.navCtrl.push('create_questionRadio');
   }

   addMulti() : void
   {
      this.navCtrl.push('create_questionMulti');
   }

   addSlider() : void
   {
      this.navCtrl.push('create_questionSlider');
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
      this.navCtrl.push('create_question', { record : params, isEdited : true });
   }



   /**
    * Update a document by passing the data to the manage-document component
    *
    * @public
    * @method updateRadio
    * @param  obj          {Object}           The document data we wish to update
    * @return {none}
    */
   updateRadio(obj) : void
   {
      let params : any = {
         collection   : this._COLL,
         location     : obj
      };
      this.navCtrl.push('create_questionRadio', { record : params, isEdited : true });
   }

   /**
    * Update a document by passing the data to the manage-document component
    *
    * @public
    * @method updateMulti
    * @param  obj          {Object}           The document data we wish to update
    * @return {none}
    */
   updateMulti(obj) : void
   {
      let params : any = {
         collection   : this._COLL,
         location     : obj
      };
      this.navCtrl.push('create_questionMulti', { record : params, isEdited : true });
   }

   /**
    * Update a document by passing the data to the manage-document component
    *
    * @public
    * @method updateSlider
    * @param  obj          {Object}           The document data we wish to update
    * @return {none}
    */
   updateSlider(obj) : void
   {
      let params : any = {
         collection   : this._COLL,
         location     : obj
      };
      this.navCtrl.push('create_questionSlider', { record : params, isEdited : true });
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
         this.displayAlert('Success', 'The question ' + obj.name + ' was successfully removed');
      })
      .catch((error : any) =>
      {
         this.displayAlert('Error', error.message);
      });
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
