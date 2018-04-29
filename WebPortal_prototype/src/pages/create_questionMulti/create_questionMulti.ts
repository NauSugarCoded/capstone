import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';


@IonicPage({
	name: "create_questionMulti"
})
@Component({
  selector: 'page-create-questionMulti',
  templateUrl: 'create_questionMulti.html',
})


export class CreateQuestionMultiPage {



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
    * @name qtext
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public qtext 	: string          = '';

	 /**
		* @name option1
		* @type {string}
		* @public
		* @description     Model for established form field
		*/
	 public option1 	: string          = '';

	 /**
		* @name option2
		* @type {string}
		* @public
		* @description     Model for established form field
		*/
	 public option2 	: string          = '';

	 /**
		* @name option3
		* @type {string}
		* @public
		* @description     Model for established form field
		*/
	 public option3 	: string          = '';

	 /**
		* @name option4
		* @type {string}
		* @public
		* @description     Model for established form field
		*/
	 public option4 	: string          = '';

	 /**
		* @name option5
		* @type {string}
		* @public
		* @description     Model for established form field
		*/
	 public option5 	: string          = '';

	 /**
		* @name option6
		* @type {string}
		* @public
		* @description     Model for established form field
		*/
	 public option6 	: string          = '';

   /**
    * @name option7
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public option7 	: string          = '';

   /**
    * @name option8
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public option8 	: string          = '';

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
   public title 		: string		   = 'Add a new question';
   public owner			: string;
   public options   : any;
   public iter      : any;

   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description     property that stores the value for the database collection
    */
   private _COLL 		: string 			= "Questions";

	 public owner			: string;


   constructor(public navCtrl        : NavController,
               public params         : NavParams,
               private _FB 	         : FormBuilder,
               private _DB           : DatabaseProvider,
               private _US					 : UsersserviceProvider,
               private _ALERT        : AlertController)
   {

      // Use Formbuilder API to create a FormGroup object
      // that will be used to programmatically control the
      // form / form fields in the component template
      this.form 		= _FB.group({
         'name' 		      : ['', Validators.required],
         'type' 	        : ['', Validators.required],
         'qtext'	        : ['', Validators.required],
				 'option1'				: ['', Validators.required],
				 'option2'				: [''],
				 'option3'				: [''],
				 'option4'				: [''],
				 'option5'				: [''],
				 'option6'				: [''],
         'option7'				: [''],
         'option8'				: ['']
      });


      // If we have navigation parameters then we need to
      // parse these as we know these will be used for
      // editing an existing record
      if(params.get('isEdited'))
      {
          let record 		        = params.get('record');

          this.name	            = record.location.name;
          this.type   	  = record.location.type;
          this.qtext      = record.location.qtext;
					this.option1 		= record.location.option1;
					this.option2 		= record.location.option2;
					this.option3 		= record.location.option3;
					this.option4 		= record.location.option4;
					this.option5 		= record.location.option5;
					this.option6 		= record.location.option6;
          this.option7 		= record.location.option7;
          this.option8 		= record.location.option8;
          this.options    = record.location.options;
          this.docID            = record.location.id;
          this.owner						= record.location.owner;
          this.isEditable       = true;
          this.iter             = [];
          this.options          = [];
          this.title            = 'Update this question';
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
  		    qtext       : string		= this.form.controls["qtext"].value,
					option1 		: string 		= this.form.controls["option1"].value,
					option2 		: string 		= this.form.controls["option2"].value,
					option3 		: string 		= this.form.controls["option3"].value,
					option4 		: string 		= this.form.controls["option4"].value,
					option5 		: string 		= this.form.controls["option5"].value,
					option6 		: string 		= this.form.controls["option6"].value,
          option7 		: string 		= this.form.controls["option7"].value,
          option8 		: string 		= this.form.controls["option8"].value,
          iter        : any       = [option1, option2, option3, option4, option5, option6, option7, option8],
          options     : any       = [],
          owner				: string		= this._US.returnUser();


      //Makes options only populated with non-null in strings
      let i = 0;
      for(i; i<7; i++){
        if(iter[i] != ""){
          options[i] = iter[i]
        }
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
	                               qtext   : qtext,
																 option1 : option1,
																 option2 : option2,
																 option3 : option3,
																 option4 : option4,
																 option5 : option5,
																 option6 : option6,
                                 option7 : option7,
                                 option8 : option8,
                                 options : options,
                                 owner	 : owner
	                           })
         .then((data) =>
         {
            this.clearForm();
            this.displayAlert('Success', 'The question ' +  name + ' was successfully updated');
         })
         .catch((error) =>
         {
            this.displayAlert('Updating question failed', error.message);
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
	                           qtext   : qtext,
														 option1 : option1,
														 option2 : option2,
														 option3 : option3,
														 option4 : option4,
														 option5 : option5,
														 option6 : option6,
                             option7 : option7,
                             option8 : option8,
                             options : options,
                             owner	 : owner
	                        })
         .then((data) =>
         {
            this.clearForm();
            this.displayAlert('Question added', 'The question ' +  name + ' was successfully added');
         })
         .catch((error) =>
         {
            this.displayAlert('Adding question failed', error.message);
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
      this.name  		= '';
      //this.type			= '';
      this.qtext 		= '';
			this.option1 	= '';
			this.option2 	= '';
			this.option3 	= '';
			this.option4 	= '';
			this.option5 	= '';
			this.option6 	= '';
      this.option7 	= '';
      this.option8 	= '';
   }


}
