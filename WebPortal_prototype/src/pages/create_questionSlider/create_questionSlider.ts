import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';


@IonicPage({
	name: "create_questionSlider"
})
@Component({
  selector: 'page-create-questionSlider',
  templateUrl: 'create_questionSlider.html',
})


export class CreateQuestionSliderPage {


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
    * @name leftLabel
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public leftLabel 	: string          = '';


   /**
    * @name rightLabel
    * @type {string}
    * @public
    * @description     Model for established form field
    */
   public rightLabel 	: string          = '';


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
   public options   : any;
   public owner			: string;


   /**
    * @name _COLL
    * @type {string}
    * @private
    * @description     property that stores the value for the database collection
    */
   private _COLL 		: string 			= "Questions";

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
         'name' 		        : ['', Validators.required],
         'type' 	        : ['', Validators.required],
         'qtext'	        : ['', Validators.required],
         'leftLabel'      :[''],
         'rightLabel'     :['']
      });


      // If we have navigation parameters then we need to
      // parse these as we know these will be used for
      // editing an existing record
      if(params.get('isEdited'))
      {
          let record 		        = params.get('record');
          this.name	            = record.location.name;
          this.type   	        = record.location.type;
          this.qtext            = record.location.qtext;
          this.docID            = record.location.id;
          this.owner						= record.location.owner;
          this.leftLabel        = record.location.leftLabel;
          this.rightLabel        = record.location.rightLabel;
          this.isEditable       = true;
          this.options          = ["none"];
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
      let name	      : string		= this.form.controls["name"].value.trim(),
	 	      type        : string 		= this.form.controls["type"].value,
  		    qtext       : string		= this.form.controls["qtext"].value.trim(),
          leftLabel   : string		= this.form.controls["leftLabel"].value.trim(),
          rightLabel  : string		= this.form.controls["rightLabel"].value.trim(),
          options     : any       = ["none"],
          owner				: string		= this._US.returnUser();

      // If we are editing an existing record then handle this scenario
      if(this.isEditable)
      {

         // Call the DatabaseProvider service and pass/format the data for use
         // with the updateDocument method
         this._DB.updateDocument(this._COLL,
                               this.docID,
                               {
	                               name       : name,
	                               type       : type,
	                               qtext      : qtext,
                                 leftLabel  : leftLabel,
                                 rightLabel : rightLabel,
                                 options: ["none"],
                                 owner	 : owner
	                           })
         .then((data) =>
         {
            this.displayAlert('Success', 'The question ' +  name + ' was successfully updated');
						this.navCtrl.pop();
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
                             leftLabel  : leftLabel,
                             rightLabel : rightLabel,
                             options: ["none"],
                             owner	 : owner
	                        })
         .then((data) =>
         {
            this.displayAlert('Question added', 'The question ' +  name + ' was successfully added');
						this.navCtrl.pop();
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
      this.name  		  = '';
      this.type				= '';
      this.qtext 			= '';
      this.leftLabel  = '';
      this.rightLabel = '';
   }


}
