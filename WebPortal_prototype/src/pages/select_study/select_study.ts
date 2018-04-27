import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';


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
   * @name start_date
   * @type {date}
   * @public
   * @description     Model for established form field
   */
  public start_date 	: string           ='';

  /**
   * @name end_date
   * @type {date}
   * @public
   * @description     Model for established form field
   */
  public end_date 	: string           ='';

  /**
   * @name end_time
   * @type {date}
   * @public
   * @description     Model for established form field
   */
  public end_time 	: string           ='';


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

  public email    : string;



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
        'full_name' 		        : ['', Validators.required],
        'short_name' 	        : ['', Validators.required],
        'abstract'	            : ['', Validators.required],
        'start_date'	            : ['', Validators.required],
        'end_date'	            : ['', Validators.required],
        'end_time'              : ['', Validators.required],
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
         this.start_date      = record.location.start_date;
         this.end_date      = record.location.end_date;
         this.end_time      = record.location.end_time;
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
    this.email = this._US.returnUser();
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

  updateStudy(obj)  : void
  {
     let full_name	      : string		= this.form.controls["full_name"].value,
         short_name        : string 		= this.form.controls["short_name"].value,
         abstract       : string		= this.form.controls["abstract"].value,
         start_date       : string		= this.form.controls["start_date"].value,
         end_date       : string		= this.form.controls["end_date"].value,
         end_time       : string    = this.form.controls["end_time"].value;

     // If we are editing an existing record then handle this scenario
     if(this.isEditable)
     {

        // Call the DatabaseProvider service and pass/format the data for use
        // with the updateDocument method
        this._DB.updateDocument(this._COLL,
                              this.docID,
                              {
                                full_name    : full_name,
                                short_name    : short_name,
                                abstract   : abstract,
                                start_date	: start_date,
                                end_date   : end_date,
                                end_time   : end_time
                            })
        .then((data) =>
        {
           this.displayAlert('Success', 'The study ' +  short_name + ' was successfully updated');
        })
        .catch((error) =>
        {
           this.displayAlert('Updating study failed', error.message);
        });
     }

     // Otherwise we are adding a new record
     else
     {

        // Call the DatabaseProvider service and pass/format the data for use
        // with the addDocument method
        this._DB.addDocument(this._COLL,
                           {
                            full_name    : full_name,
                            short_name    : short_name,
                            abstract   : abstract,
                            start_date	: start_date,
                            end_date   : end_date,
                            end_time   : end_time
                         })
        .then((data) =>
        {
           this.displayAlert('Record added', 'The study ' +  short_name + ' was successfully added');
        })
        .catch((error) =>
        {
           this.displayAlert('Adding study failed', error.message);
        });
     }
  }

   saveDocument(val : any)
   {
     this._DB.addStudies_Modules(this._COLL, this.docID, "modules", val)
     .then((data : any) =>
     {
       this.displayAlert('Success', 'The module ' + val.name + ' was successfully added');
     })
     .catch((error : any) =>
     {
       this.displayAlert('Error', error.message);
     });
   }

   viewDocument(obj) : void
   {
      let params : any = {
         collection   : "modules",
         module     : obj
      };
      this.navCtrl.push('select_module', { record : params, isEdited : true });
   }

   deleteDocument() : void
   {
      this._DB.deleteDocument(this._COLL,
                 this.docID)
      .then((data : any) =>
      {
         this.displayAlert('Success', 'The study ' + this.short_name + ' was successfully removed');
         this.navCtrl.push('study');
      })
      .catch((error : any) =>
      {
         this.displayAlert('Error', error.message);
      });
   }

   searchModules(input : any){

     let val = input.target.value;
     if(val && val.trim() != '') {
       this.modules = this.modules.filter((mod) => {
         return(mod.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
       })
     }

     else{
       this.retrieveSubCollection();
     }
   }

   searchOtherModules(input : any){

     let val = input.target.value;
     if(val && val.trim() != '') {
       this.mods = this.mods.filter((mod) => {
         return(mod.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
       })
     }

     else{
       this.retrieveModules();
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
