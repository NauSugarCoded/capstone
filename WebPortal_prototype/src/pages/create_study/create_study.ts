import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';


@IonicPage({
	name: "create_study"
})
@Component({
  selector: 'page-create-study',
  templateUrl: 'create_study.html',
})
export class CreateStudyPage {



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
    * @name full_name
    * @type {string}
    * @public
    * @description     Model for city form field
    */
   public full_name          : string          = '';



   /**
    * @name short_name
    * @type {string}
    * @public
    * @description     Model for population form field
    */
   public short_name    : string          = '';



   /**
    * @name abstract
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public abstract 	: string          = '';

   /**
    * @name end_date
    * @type {date}
    * @public
    * @description     Model for established form field
    */
   public end_date 	: any;



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
   public title 		: string		   = 'Add a new Study';



   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description     property that stores the value for the database collection
    */
   private _COLL 		: string 			= "Studies";


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
         'full_name' 		        : ['', Validators.required],
         'short_name' 	        : ['', Validators.required],
         'abstract'	            : ['', Validators.required],
         'end_date'	            : ['', Validators.required]
      });


      // If we have navigation parameters then we need to
      // parse these as we know these will be used for
      // editing an existing record
      if(params.get('isEdited'))
      {
          let record 		        = params.get('record');

          this.full_name	            = record.location.full_name;
          this.short_name   	  = record.location.short_name;
          this.abstract      = record.location.abstract;
          this.end_date      = record.location.end_date;
          this.docID            = record.location.id;
          this.isEditable       = true;
          this.title            = 'Update this document';
      }
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
      let full_name	      : string		= this.form.controls["full_name"].value,
	 	      short_name        : string 		= this.form.controls["short_name"].value,
          abstract       : string		= this.form.controls["abstract"].value,
          end_date       : string		= this.form.controls["end_date"].value;

      // If we are editing an existing record then handle this scenario
      if(this.isEditable)
      {

         // Call the DatabaseProvider service and pass/format the data for use
         // with the updateDocument method
         this._DB.updateDocument(this._COLL,
                               this.docID,
                               {
	                               full_name    : full_name,
	                               short_name    : short_name,
	                               abstract   : abstract,
                                 end_date   : end_date
	                           })
         .then((data) =>
         {
            this.clearForm();
            this.displayAlert('Success', 'The study ' +  name + ' was successfully updated');
         })
         .catch((error) =>
         {
            this.displayAlert('Updating study failed', error.message);
         });
      }

      // Otherwise we are adding a new record
      else
      {

         // Call the DatabaseProvider service and pass/format the data for use
         // with the addDocument method
         this._DB.addDocument(this._COLL,
                            {
	                           full_name    : full_name,
	                           short_name    : short_name,
	                           abstract   : abstract,
                             end_date   : end_date
	                        })
         .then((data) =>
         {
            this.clearForm();
            this.displayAlert('Record added', 'The study ' +  name + ' was successfully added');
         })
         .catch((error) =>
         {
            this.displayAlert('Adding study failed', error.message);
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
      this.full_name  					= '';
      this.short_name				= '';
      this.abstract 				= '';
      this.end_date         = '';
   }


}
