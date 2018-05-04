import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModulesPage } from '../modules/modules'
import { DatabaseProvider } from '../../providers/database/database';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';



@IonicPage({
	name: "create_module"
})
@Component({
  selector: 'page-create-question',
  templateUrl: 'create_module.html',
})
export class CreateModulePage {



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
    * @name type
    * @type {string}
    * @public
    * @description     Model for population form field
    */
   public type    : string          = '';

	 /**
		* @name recurrence
		* @type {string}
		* @public
		* @description     Model for established form field
		*/
	 public recurrence 	: string          = '';

	 /**
		* @name start_time
		* @type {time}
		* @public
		* @description     Model for established form field
		*/
	 public start_time 	: any;

	 /**
		* @name start_date
		* @type {date}
		* @public
		* @description     Model for established form field
		*/
	 public start_date 	: any;

	 /**
		* @name end_date
		* @type {date}
		* @public
		* @description     Model for established form field
		*/
	 public end_date 	: any;



   /**
    * @name owner
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public owner 	: string          = '';





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
   public title 		: string		   = 'Add a new module';



   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description     property that stores the value for the database collection
    */
   private _COLL 		: string 			= "Modules";

	 public every			: any;


   constructor(public navCtrl        : NavController,
               public params         : NavParams,
               private _FB 	         : FormBuilder,
               private _DB           : DatabaseProvider,
							 private _US 					 : UsersserviceProvider,
               private _ALERT        : AlertController)
   {

      // Use Formbuilder API to create a FormGroup object
      // that will be used to programmatically control the
      // form / form fields in the component template
      this.form 		= _FB.group({
         'name' 		        : ['', Validators.required],
         'type' 	        : ['', Validators.required],
				 'recurrence'			: [''],
				 'every_hour'			: [''],
				 'every_minute'		: [''],
				 'start_time'			:	[''],
				 'start_date'			: [''],
				 'end_date'				: ['']
      });


      // If we have navigation parameters then we need to
      // parse these as we know these will be used for
      // editing an existing record
      if(params.get('isEdited'))
      {
          let record 		        = params.get('record');

          this.name	            = record.location.name;
          this.type   	  = record.location.type;
          this.owner      = record.location.owner;
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
      let name	      : string		= this.form.controls["name"].value,
	 	      type        : string 		= this.form.controls["type"].value,
					recurrence	: string		= this.form.controls['recurrence'].value,
					start_time	: string		= this.form.controls['start_time'].value,
					start_date	: string		= this.form.controls['start_date'].value,
					end_date		: string		= this.form.controls['end_date'].value,
					every_hour	: number		= this.form.controls['every_hour'].value,
					every_minute : number		= this.form.controls['every_minute'].value,
					every				: number 		= (this.form.controls['every_hour'].value * 3600000) + (this.form.controls['every_minute'].value * 60000),
  		    owner       : string		= this._US.returnUser();

			if(every == 0)
			{
				every=null;
			}
      // If we are editing an existing record then handle this scenario
      if(this.isEditable)
      {

         // Call the DatabaseProvider service and pass/format the data for use
         // with the updateDocument method
         this._DB.updateDocument(this._COLL,
                               this.docID,
                               {
	                               name    : name,
	                               type    : type,
																 recurrence : recurrence,
																 start_time	: start_time,
																 start_date	: start_date,
																 end_date		: end_date,
																 every_hour	: every_hour,
																 every_minute : every_minute,
																 every			: every,
	                               owner   : owner
	                           })
         .then((data) =>
         {
            this.clearForm();
            this.displayAlert('Success', 'The module ' +  name + ' was successfully updated');
         })
         .catch((error) =>
         {
            this.displayAlert('Updating module failed', error.message);
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
	                           type    : type,
														 recurrence : recurrence,
														 start_time	: start_time,
														 start_date : start_date,
														 end_date		: end_date,
														 every_hour	: every_hour,
														 every_minute : every_minute,
														 every			: every,
	                           owner   : owner
	                        })
         .then((data) =>
         {
            this.clearForm();
            this.displayAlert('Record added', 'The module ' +  name + ' was successfully added');
						this.navCtrl.pop();
         })
         .catch((error) =>
         {
            this.displayAlert('Adding module failed', error.message);
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
      this.type				= '';
   }


}
