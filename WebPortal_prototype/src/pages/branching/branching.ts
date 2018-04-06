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
   * @name branch
   * @type {string}
   * @public
   * @description     Model for population form field
   */
  public branch    : any;
  public name  : any;


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
  private qID     : any;
  private quest : any;
  private qtext : any;
  private type : any;
  private moduleID : any;

  constructor(public navCtrl        : NavController,
              public params         : NavParams,
              private _FB 	        : FormBuilder,
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
         let record 		        = params.get('record');
         this.name            = record.location.name;
         this.qtext           = record.location.qtext;
         this.branch          = record.location.branch;
         this.docID            = record.location.id;
         this.moduleID        = record.location.moduleID;
         this.qID             = record.location.quest_id;
         this.type             = record.location.type;
         this.isEditable       = true;
         this.title            = 'Update this branch';
  }

  ionViewDidEnter()
  {
    this.retrieveCollection();
    if(this.moduleID != '') {
      this.retrieveSubCollection();
    }
  /*  var start = new Date().getTime();
    var end = start;
    while(end < start + 5000) {
      end = new Date().getTime();
    }
    for(let i = 0; i < 3; i++){
    console.log(this.questions[i].name);
  }*/
  }

  /*findID() : void
  {
    console.log(this.quests);
    if(this.quests != ''){
      let i = 0;
      for(i; i < this.quests.length; i++){
        if(this.qID == this.quests[i].docID) {
          quest = this.quests[i];
          console.log(quest);
          break;

        }
      }
    }
  }*/

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
     this._DB.getModules_Questions(this._COLL, this.moduleID, "Questions")
     .then((data) =>
     {
       console.log(data);
       this.questions = data;
       console.log(this.questions);
     })
     .catch();
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
     let branch        : string 		= this.form.controls["branch"].value;



     // If we are editing an existing record then handle this scenario
     if(this.isEditable)
     {

        // Call the DatabaseProvider service and pass/format the data for use
        // with the updateDocument method
        this._DB.updateDocument(this._COLL,
                              this.docID,
                              {
                                branch    : branch
                            })
        .then((data) =>
        {
           this.clearForm();
           this.displayAlert('Success', 'The branch was successfully updated');
        })
        .catch((error) =>
        {
           this.displayAlert('Updating branch failed', error.message);
        });
     }

     // Otherwise we are adding a new record
     /*else
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
     }*/
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
