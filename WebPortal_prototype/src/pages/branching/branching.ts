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
  public branch2    : any;
  public branch3    : any;
  public branch4    : any;
  public branch5    : any;
  public branch6    : any;
  public branch7    : any;
  public branch8    : any;

  public branchID   : any;
  public branchID2    : any;
  public branchID3    : any;
  public branchID4    : any;
  public branchID5    : any;
  public branchID6    : any;
  public branchID7    : any;
  public branchID8    : any;

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
  private options : any;
  private quest_id : any;
  private moduleID : any;
  private options_1 : any;
  private options_2 : any;
  private options_3 : any;
  private options_4 : any;
  private options_5 : any;
  private options_6 : any;
  private options_7 : any;
  private options_8 : any;

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
        'branch' 		          : ['', Validators.required],
        'branch2' 		        : [''],
        'branch3' 		        : [''],
        'branch4' 		        : [''],
        'branch5' 		        : [''],
        'branch6' 		        : [''],
        'branch7' 		        : [''],
        'branch8' 		        : ['']
     });


     // If we have navigation parameters then we need to
     // parse these as we know these will be used for
     // editing an existing record
         let record 		      = params.get('record');
         this.name            = record.location.name;
         this.qtext           = record.location.qtext;
         this.branch          = record.location.branch;
         this.docID           = record.location.id;
         this.moduleID        = record.location.moduleID;
         this.quest_id        = record.location.quest_id;
         this.type            = record.location.type;
         this.options         = record.location.options;
         this.isEditable      = true;
         this.title           = 'Update this branch';
  }

  ionViewDidEnter()
  {
    //this.retrieveCollection();
    if(this.moduleID != '') {
      this.retrieveSubCollection();
      if(this.type == "radio")
      {
        this.options_1 = this.options[0];
        this.options_2 = this.options[1];
        this.options_3 = this.options[2];
        this.options_4 = this.options[3];
        this.options_5 = this.options[4];
        this.options_6 = this.options[5];
        this.options_7 = this.options[6];
        this.options_8 = this.options[7];
      }

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

  retrieveSubCollection() : void
  {
     this._DB.getModules_Questions("Modules", this.moduleID, "Questions")
     .then((data) =>
     {
       this.questions = data;
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
     let branch         : string 		= this.form.controls["branch"].value;
     let branch2        : string 		= this.form.controls["branch2"].value;
     let branch3        : string 		= this.form.controls["branch3"].value;
     let branch4        : string 		= this.form.controls["branch4"].value;
     let branch5        : string 		= this.form.controls["branch5"].value;
     let branch6        : string 		= this.form.controls["branch6"].value;
     let branch7        : string 		= this.form.controls["branch7"].value;
     let branch8        : string 		= this.form.controls["branch8"].value;

     let i = 0;
     let branchID = '';
     let branchID2 = '';
     let branchID3 = '';
     let branchID4 = '';
     let branchID5 = '';
     let branchID6 = '';
     let branchID7 = '';
     let branchID8 = '';

     for(i = 0; i < this.questions.length; i++){
       console.log(this.questions[i].quest_id);
       if(branch == this.questions[i].name){
         console.log("It entered the if statement");
         branchID = this.questions[i].quest_id;
       }
       else if(branch == "-1"){
         branchID = "-1";
       }
     }

     for(i = 0; i < this.questions.length; i++){
       if(branch2 == this.questions[i].name){
         branchID2 = this.questions[i].quest_id;
       }
       else if(branch2 == "-1"){
         branchID2 = "-1";
       }
     }

     for(i = 0; i < this.questions.length; i++){
       if(branch3 == this.questions[i].name){
         branchID3 = this.questions[i].quest_id;
       }
       else if(branch3 == "-1"){
         branchID3 = "-1";
       }
     }

     for(i = 0; i < this.questions.length; i++){
       if(branch4 == this.questions[i].name){
         branchID4 = this.questions[i].quest_id;
       }
       else if(branch4 == "-1"){
         branchID4 = "-1";
       }

     }

     for(i = 0; i < this.questions.length; i++){
       if(branch5 == this.questions[i].name){
         branchID5 = this.questions[i].quest_id;
       }
       else if(branch5 == "-1"){
         branchID5 = "-1";
       }
     }

     for(i = 0; i < this.questions.length; i++){
       if(branch6 == this.questions[i].name){
         branchID6 = this.questions[i].quest_id;
       }
       else if(branch6 == "-1"){
         branchID6 = "-1";
       }
     }

     for(i = 0; i < this.questions.length; i++){
       if(branch7 == this.questions[i].name){
         branchID7 = this.questions[i].quest_id;
       }
       else if(branch7 == "-1"){
         branchID7 = "-1";
       }
     }

     for(i = 0; i < this.questions.length; i++){
       if(branch8 == this.questions[i].name){
         branchID8 = this.questions[i].quest_id;
       }
       else if(branch8 == "-1"){
         branchID8 = "-1";
       }
     }

     let localarr = [branchID, branchID2, branchID3, branchID4, branchID5, branchID6, branchID7, branchID8];
     let brancharr = [];
     let x = 0;
     for(i = 0; i < localarr.length; i++){
       if(localarr[i] != ''){
         brancharr[x] = localarr[i];
         x++;
       }
     }




     // If we are editing an existing record then handle this scenario
     if(this.isEditable)
     {
        // Call the DatabaseProvider service and pass/format the data for use
        // with the updateDocument method
        this._DB.updateModules_Questions(this._COLL,
                              this.moduleID,"Questions", this.docID,
                              {
                                branch    : brancharr,
                            })
        .then((data) =>
        {
           this.displayAlert('Success', 'The branch was successfully updated');
           this.navCtrl.pop();
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
   * Delete a document from the Cloud Firestore collection using the
   * deleteDocument method of the DatabaseProvider service
   *
   * @public
   * @method deleteDocument
   * @param  obj          {Object}           The document ID for the document we wish to delete
   * @return {none}
   */
  deleteDocument() : void
  {
     this._DB.deleteModules_Question("Modules", this.moduleID, "Questions", this.docID)
     .then((data : any) =>
     {
        this.displayAlert('Success', 'The question ' + this.name + ' was successfully removed');
        this.navCtrl.pop();
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
     this.name  			= '';
     this.type				= '';
  }

}
