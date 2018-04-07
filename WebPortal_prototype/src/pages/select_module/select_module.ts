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
  public start_date 	: string             = '';

  /**
   * @name end_date
   * @type {date}
   * @public
   * @description     Model for established form field
   */
  public end_date 	: string             = '';



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
  private _COLL 		: string 			= "Modules";
  private module  : any;
  private record : any;

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
  private option1       : string;
  private option2       : string;
  private option3       : string;
  private option4       : string;
  private option5       : string;
  private option6       : string;
  private opts          : any;


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
        'type'	        : ['', Validators.required],
        'recurrence'			: [''],
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
         this.recurrence = record.location.recurrence;
         this.start_time = record.location.start_time;
         this.start_date = record.location.start_date;
         this.end_date = record.location.end_date;
         this.owner      = record.location.owner;
         this.docID            = record.location.id;
         this.isEditable       = true;
         this.title            = 'Update this document';

         this.module = record.location;
     }
  }

  ionViewDidEnter()
  {
    this.retrieveCollection();
    if(this.docID != ''){
      this.retrieveSubCollection();
    }
  }

  retrieveCollection() : void
  {
     this._DB.getQuestions_Modules("Questions")
     .then((data) =>
     {
       this.quests = data;
       console.log(this.quests);
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


  updateModule(val : any) : void
  {
     let name	      : string		= this.form.controls["name"].value,
         type       : string 		= this.form.controls["type"].value,
         recurrence	: string		= this.form.controls['recurrence'].value,
         start_time	: string		= this.form.controls['start_time'].value,
         start_date	: string		= this.form.controls['start_date'].value,
         end_date		: string		= this.form.controls['end_date'].value


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
                                end_date		: end_date
                            })
        .then((data) =>
        {
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
                            end_date		: end_date
                         })
        .then((data) =>
        {
           this.displayAlert('Record added', 'The module ' +  name + ' was successfully added');
        })
        .catch((error) =>
        {
           this.displayAlert('Adding module failed', error.message);
        });
     }
  }

  deleteDocument() : void
  {
     this._DB.deleteDocument(this._COLL,
                this.docID)
     .then((data : any) =>
     {
        this.displayAlert('Success', 'The module ' + this.name + ' was successfully removed');
     })
     .catch((error : any) =>
     {
        this.displayAlert('Error', error.message);
     });
  }


  saveQuestions(val : any, moduleID : any)
  {
    if(val.type == "text"){
      this._DB.addModules_Questions("Modules", this.docID, "Questions", {
                                                            name    : val.name,
                                                            id      : val.id,
                                                            type    : val.type,
                                                            qtext   : val.qtext,
                                                            owner	 : val.owner,
                                                            moduleID : moduleID
                                                          })
      .then((data : any) =>
      {
        this.displayAlert('Success', 'The question ' + val.name + ' was successfully added');
      })
      .catch((error : any) =>
      {
        this.displayAlert('Error', error.message);
      });
    }

    else if(val.type == "multi"){
      this.saveQuestionsHelper(val)
      .then((opts : any) =>
      {
      console.log(this.opts);
      this._DB.addModules_Questions("Modules", this.docID, "Questions", {
                                                            name    : val.name,
                                                            id      : val.id,
                                                            type    : val.type,
                                                            qtext   : val.qtext,
                                                            owner	  : val.owner,
                                                            option1 : opts[0],
                           																  option2 : opts[1],
                           																  option3 : opts[2],
                           																  option4 : opts[3],
                           																  option5 : opts[4],
                           																  option6 : opts[5],
                                                            moduleID : moduleID
                                                          })
      .then((data : any) =>
      {
        this.displayAlert('Success', 'The question ' + val.name + ' was successfully added');
      })
      .catch((error : any) =>
      {
        this.displayAlert('Error', error.message);
      });
      })
    }

    else if(val.type == "radio"){
      this.saveQuestionsHelper(val)
      .then((opts : any) =>
      {
      this._DB.addModules_Questions("Modules", this.docID, "Questions", {
                                                            name    : val.name,
                                                            type    : val.type,
                                                            id      : val.id,
                                                            qtext   : val.qtext,
                                                            owner	  : val.owner,
                                                            option1 : opts[0],
                           																  option2 : opts[1],
                           																  option3 : opts[2],
                           																  option4 : opts[3],
                           																  option5 : opts[4],
                           																  option6 : opts[5],
                                                            moduleID : moduleID
                                                          })
      .then((data : any) =>
      {
        this.displayAlert('Success', 'The question ' + val.name + ' was successfully added');
      })
      .catch((error : any) =>
      {
        this.displayAlert('Error', error.message);
      });
    })
    }

    else{
      this._DB.addModules_Questions("Modules", this.docID, "Questions", {
                                                            name    : val.name,
                                                            id      : val.id,
                                                            type    : val.type,
                                                            qtext   : val.qtext,
                                                            owner	  : val.owner,
                                                            moduleID : moduleID
                                                          })
      .then((data : any) =>
      {
        this.displayAlert('Success', 'The question ' + val.name + ' was successfully added');
      })
      .catch((error : any) =>
      {
        this.displayAlert('Error', error.message);
      });
    }

  }

  saveQuestionsHelper(val : any) : any
  {
    let opts = [];
    let i = 0;
    for(i = 0; i < this.quests.length; i++){
      if (this.quests[i] == val.name){
        opts[0] = this.quests[i].option1;
        opts[1] = this.quests[i].option2;
        opts[2] = this.quests[i].option3;
        opts[3] = this.quests[i].option4;
        opts[4] = this.quests[i].option5;
        opts[5] = this.quests[i].option6;
      }
    }
    return opts;
  }

  updateDocument(object) : void
  {
     let params : any = {
        collection   : this._COLL,
        location     : object
     };
     this.navCtrl.push('branching', { record : params});
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
