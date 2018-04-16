import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';

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

  public email          : string;

  public every          : string;

  public flag          : boolean = false;
  public firstFlag     : boolean = false;
  public secondFlag    : boolean = false;
  public link          : string;

  constructor(public navCtrl        : NavController,
              public params         : NavParams,
              private _FB 	         : FormBuilder,
              private _DB           : DatabaseProvider,
              private _US           : UsersserviceProvider,
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
        'end_date'				: [''],
        'every'           : [''],

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
         this.every    = record.location.every;
         this.owner      = record.location.owner;
         this.docID            = record.location.id;
         this.isEditable       = true;
         this.title            = 'Update this document';
     }
  }

  ionViewDidEnter()
  {
    this.retrieveCollection();
    if(this.docID != ''){
      this.retrieveSubCollection();
    }

    this.email = this._US.returnUser();
  }

  retrieveCollection() : void
  {
     this._DB.getQuestions_Modules("Questions")
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

  updateModule(val : any) : void
  {
     let name	      : string		= this.form.controls["name"].value,
         type        : string 		= this.form.controls["type"].value,
         recurrence	: string		= this.form.controls['recurrence'].value,
         start_time	: string		= this.form.controls['start_time'].value,
         start_date	: string		= this.form.controls['start_date'].value,
         end_date		: string		= this.form.controls['end_date'].value,
         every      : string    = this.form.controls['every'].value;


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
                                every       : every
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
                            end_date		: end_date,
                            every       : every
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

  saveQuestions(val : any)
  {
    this._DB.addModules_Questions("Modules", this.docID, "Questions", val)
    .then((data : any) =>
    {
      this.displayAlert('Success', 'The question ' + val.name + ' was successfully added');
    })
    .catch((error : any) =>
    {
      this.displayAlert('Error', error.message);
    });
  }

  exportAnswers_Modules(){
    this._DB.exportAnswers_Modules(this.docID, this.name);
    this.flag = true;
  }

  setLink() : void
  {
    this._DB.downloadAnswers_Modules(this.name);
    this.firstFlag = true;
  }

  createLink() : void
  {
    this.link = this._DB.returnURL();
    console.log(this.link);
    this.secondFlag = true;
  }

  downloadFile() : void
  {
    window.location.href = this.link["i"];
  }

  searchQuestions(input : any){

    let val = input.target.value;
    if(val && val.trim() != '') {
      this.questions = this.questions.filter((question) => {
        return(question.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

    else{
      this.retrieveSubCollection();
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
