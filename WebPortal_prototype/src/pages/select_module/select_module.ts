import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the SelectModulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
 name: "select_module"
})
@Component({
  selector: 'page-select-module',
  templateUrl: 'select_module.html',
})
export class SelectModulePage {

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
   * @name owner
   * @type {string}
   * @public
   * @description     Model for population form field
   */
  public owner    : string          = '';



  /**
   * @name tyoe
   * @type {string}
   * @public
   * @description     Model for established form field
   */
  public type 	: string          = '';



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



  /**
   * @name _COLL
   * @type {string}
   * @private
   * @description     property that stores the value for the database collection
   */
  private _COLL 		: string 			= "modules";


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
        'owner' 	        : ['', Validators.required],
        'type'	        : ['', Validators.required]
     });


     // If we have navigation parameters then we need to
     // parse these as we know these will be used for
     // editing an existing record
     if(params.get('isEdited'))
     {
         let record 		        = params.get('record');

         this.name	            = record.module.name;
         this.type   	  = record.module.type;
         this.owner      = record.module.owner;
         this.docID            = record.module.id;
         this.isEditable       = true;
         this.title            = 'Update this document';
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


}
