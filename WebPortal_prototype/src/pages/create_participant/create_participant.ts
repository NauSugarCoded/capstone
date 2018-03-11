import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { DatabaseProvider } from '../../providers/database/database';
import { Storage } from '@ionic/storage';


@IonicPage({
	name: "create_participant"
})
@Component({
  selector: 'page-create-participant',
  templateUrl: 'create_participant.html',
})

export class CreateParticipantPage {


   /**
    * @name form
    * @type {object}
    * @public
    * @description     Defines an object for handling form validation
    */
   public form          : any;



   /**
    * @name records
    * @type {object}
    * @public
    * @description     Defines an object for returning documents from Cloud Firestore database
    */
   public records       : any;



   /**
    * @name name
    * @type {string}
    * @public
    * @description     Model for city form field
    */
   public name          : string          = '';


   /**
    * @name email
    * @type {string}
    * @public
    * @description     Model for population form field
    */
   public email    : string          = '';


   /**
    * @name phone
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public phone 	: string          = '';

   /**
    * @name owner
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public owner 	: string          = '';

   /**
    * @name sleep_end
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public sleep_end 	: string          = '';

   /**
    * @name sleep_start
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public sleep_start 	: string          = '';

   /**
    * @name study
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public study 	: string          = '';


   /**
    * @name docID
    * @type {string}
    * @public
    * @description     property that stores an edited document's ID
    */
   public docID         : string          = '';



   /**
    * @name isEditable
    * @type {boolean}
    * @public
    * @description     property that stores value to signify whether
                       we are editing an existing document or not
    */
   public isEditable    : boolean         = false;



   /**
    * @name title
    * @type {string}
    * @public
    * @description     property that defines the template title value
    */
   public title 		: string		   = 'Add a new participant';



   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description     property that stores the value for the database collection
    */
   private _COLL 		: string 			= "Participants";
	 private _STUDS 	: string		  = "Studies";
	 public studs : any;




   constructor(public navCtrl        : NavController,
               public params         : NavParams,
               private _FB 	         : FormBuilder,
               private _DB           : DatabaseProvider,
               private _ALERT        : AlertController)
   {

      // Use Formbuilder API to create a FormGroup object
      // that will be used to programmatically control the
      // form / form fields in the component template
      this.form 		= _FB.group({
         'name' 		        : ['', Validators.required],
         'email' 	        : ['', Validators.required],
         'phone'	        : ['', Validators.required],
         'owner' 	        : ['',],
         'sleep_end' 	        : ['',],
         'sleep_start' 	        : ['',],
         'study' 	        : ['', Validators.required]
      });


      // If we have navigation parameters then we need to
      // parse these as we know these will be used for
      // editing an existing record
      if(params.get('isEdited'))
      {
          let record 		        = params.get('record');

          this.name	            = record.location.name;
          this.email   	  = record.location.email;
          this.phone      = record.location.phone;
          this.owner      = record.location.owner;
          this.sleep_end  = record.location.sleep_end;
          this.sleep_start = record.location.sleep_start;
          this.study      = record.location.study;
          this.docID            = record.location.id;
          this.isEditable       = true;
          this.title            = 'Update this participant';
      }
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
      this._DB.getStudies(this._STUDS)
      .then((data) =>
      {

         // Otherwise the collection does exist and we assign the returned
         // documents to the public property of locations so this can be
         // iterated through in the component template

        this.studs = data;
      })
      .catch();
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
   }

   /**
    * Saves form data as newly added/edited record within Firebase Realtime
    * database and handles uploading of media asset to Firebase Storage
    *
    * @public
    * @method saveDocument
    * @param  val          {any}              Form data
    * @return {none}
    */
   saveDocument(val : any) : void
   {
      let name	      : string		= this.form.controls["name"].value,
	 	      email        : string 		= this.form.controls["email"].value,
  		    phone       : string		= this.form.controls["phone"].value,
          owner        : string 		= this.form.controls["owner"].value,
          sleep_end        : string 		= this.form.controls["sleep_end"].value,
          sleep_start        : string 		= this.form.controls["sleep_start"].value,
          study        : string 		= this.form.controls["study"].value;



      // If we are editing an existing record then handle this scenario
      if(this.isEditable)
      {

         // Call the DatabaseProvider service and pass/format the data for use
         // with the updateDocument method
         this._DB.updateDocument(this._COLL,
                               this.docID,
                               {
	                               name    : name,
	                               email    : email,
	                               phone   : phone,
                                 owner  : owner,
                                 sleep_end : sleep_end,
                                 sleep_start : sleep_start,
                                 study    : study
	                           })
         .then((data) =>
         {
            this.clearForm();
            this.displayAlert('Success', 'The participant ' +  name + ' was successfully updated');
         })
         .catch((error) =>
         {
            this.displayAlert('Updating participant failed', error.message);
         });
      }

      // Otherwise we are adding a new record
      else
      {

         // Call the DatabaseProvider service and pass/format the data for use
         // with the addDocument method
         this._DB.addDocument(this._COLL,
                            {
	                           name    : name,
	                           email    : email,
	                           phone   : phone,
                             owner  : owner,
                             sleep_end : sleep_end,
                             sleep_start : sleep_start,
                             study  : study
	                        })
         .then((data) =>
         {
            this.clearForm();
            this.displayAlert('Record added', 'The participant ' +  name + ' was successfully added');
         })
         .catch((error) =>
         {
            this.displayAlert('Adding participant failed', error.message);
         });
      }
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
         buttons    : ['Got it!']
      });
      alert.present();
   }



   /**
    * Clear all form data
    *
    * @public
    * @method clearForm
    * @return {none}
    */
   clearForm() : void
   {
      this.name  					= '';
      this.email				= '';
      this.phone 				= '';
      this.owner 				= '';
      this.sleep_end 				= '';
      this.sleep_start 			= '';
      this.study 				= '';

   }


}
