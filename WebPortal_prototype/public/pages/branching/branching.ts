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
 name: "branching"
})
@Component({
  selector: 'page-branching',
  templateUrl: 'branching.html',
})
export class BranchingPage {

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
   * @name owner
   * @type {string}
   * @public
   * @description     Model for population form field
   */
  public branch    : any;


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
  public title 		: string		   = 'Add question branching ';



  /**
   * @name _COLL
   * @type {string}
   * @private
   * @description     property that stores the value for the database collection
   */
  private _COLL 		: string 			= "Modules";

  /**
   * @name quests
   * @type {object}
   * @private
   * @description     property that stores the value for the database collection
   */
  private quests 		: any;

  /**
   * @name questions
   * @type {object}
   * @private
   * @description     property that stores the value for the database collection
   */
  private questions 		: any;

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
        'branch' 		        : ['', Validators.required]
     });


     // If we have navigation parameters then we need to
     // parse these as we know these will be used for
     // editing an existing record
     if(params.get('isEdited'))
     {
         let record 		        = params.get('record');

         this.branch          = record.location.branch;
         this.docID            = record.location.id;
         this.isEditable       = true;
         this.title            = 'Update this document';
     }
  }

  ionViewDidEnter()
  {
    this.retrieveCollection();
    this.retrieveSubCollection();
  }

  retrieveCollection() : void
  {
     this._DB.getQuestions("Questions")
     .then((data) =>
     {
       this.quests = data;

     })
     .catch();
  }

  retrieveSubCollection() : void
  {
     this._DB.getModules_Questions(this._COLL, this.docID, "Questions")
     .then((data) =>
     {
       this.questions = data;
     })
     .catch();
  }

  saveQuestions(val : any)
  {
    this._DB.addModules_Questions("Modules", this.docID, "Questions", val);
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
