import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModulesPage } from "../modules/modules"
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the SelectStudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage({
 	name: "select_study"
 })
@Component({
  selector: 'page-select-study',
  templateUrl: 'select_study.html',
})
export class SelectStudyPage {

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
  public end_date 	: string           ='';



  /**
   * @name docID
   * @type {string}
   * @public
   * @description     property that stores an edited document's ID
   */
  public docID         : string          = '81XU1moWva6onAtMHpYY';



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

  /**
   * @name modules
   * @type {any}
   * @public
   * @description      Property to store the returned documents from the database collection
   */
  public modules     : any;

  /**
   * @name locations
   * @type {any}
   * @public
   * @description      Property to store the returned documents from the database collection
   */
  public locations     : any;


  /**
   * @name mods
   * @type {any}
   * @public
   * @description      Property to store the returned documents from the database collection
   */
  public mods     : any;



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
        'end_date'	            : ['', Validators.required],
        'modules'               : ['']
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
    this.retrieveSubCollection();
    this.retrieveModules();
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

  /**
   * Retrieve all documents from the specified collection using the
   * getDocuments method of the DatabaseProvider service
   *
   * @public
   * @method retrieveCollection
   * @return {none}
   */
  retrieveSubCollection() : void
  {
     this._DB.getStudies_Modules(this._COLL, this.docID, "modules")
     .then((data) =>
     {
       this.modules = data;
     })
     .catch();
  }

  retrieveModules() : void
  {
    this._DB.getModules("Modules")
    .then((data) =>
    {
      this.mods = data;
    })
    .catch();
  }

   /**
    * Navigate to the manage-document component to begin adding a new document
    *
    * @public
    * @method addModule
    * @return {none}
    */
   addDocument(obj) : void
   {
      this.navCtrl.push(ModulesPage);
   }

   saveDocument(val : any)
   {
     this._DB.addStudies_Modules(this._COLL, this.docID, "modules", val);
   }

   viewDocument(obj) : void
   {
      let params : any = {
         collection   : "modules",
         module     : obj
      };
      this.navCtrl.push('select_module', { record : params, isEdited : true });
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
