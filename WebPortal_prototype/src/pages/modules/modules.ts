import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';

/**
 * Generated class for the ModulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'modules'
})
@Component({
  selector: 'page-modules',
  templateUrl: 'modules.html',
})
export class ModulesPage {

  /**
   * @name _COLL
   * @type {string}
   * @private
   * @description      Defines the name of the database collection
   */
  private _COLL 		: string 			= "Modules";




  /**
   * @name _DOC
   * @type {string}
   * @private
   * @description      Defines the initial document ID for the database collection
   */
  private _DOC 		: string 			= "lNE0Z5IRAWtMJN4BujuD";




  /**
   * @name _CONTENT
   * @type {any}
   * @private
   * @description      Used to store/provide the initial document data for the database collection
   */
  private _CONTENT  	: any;



  /**
   * @name locations
   * @type {any}
   * @public
   * @description      Property to store the returned documents from the database collection
   */
  public locations     : any;

  public email         : string;
  public url           : any;
  public link          : string;
  public flag          : boolean = false;
  public firstFlag     : boolean = false;
  public secondFlag    : boolean = false;
  public answers       : any;
  public local         : any;
  public searchbar     : any;


  constructor(public navCtrl: NavController,
              private _DB     : DatabaseProvider,
              private _US     : UsersserviceProvider) {

    this._CONTENT = {
       name : "Test",
       owner: "Natasha",
       type : "TimeBased"
    };

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
      this.email = this._US.returnUser();
      this.searchbar = '';
   }

   /**
    * Creates the collection and populates that with an initial document
    * using the createAndPopulateDocument method of the DatabaseProvider
    * service
    *
    * @public
    * @method generateCollectionAndDocument
    * @return {none}
    */
   generateCollectionAndDocument() : void
   {
      this._DB.createAndPopulateDocument(this._COLL,
                                         this._DOC,
                                         this._CONTENT)
      .then((data : any) =>
      {
         console.dir(data);
      })
      .catch((error : any) =>
      {
         console.dir(error);
      });
   }



   /**
    * Retrieve all documents from the specified collection using the
    * getDocuments method of the DatabaseProvider service
    *
    * @public
    * @method retrieveCollection
    * @return {none}
    */
   retrieveCollection() : void
   {

      this._DB.getModules(this._COLL)
      .then((data) =>
      {

         // IF we don't have any documents then the collection doesn't exist
         // so we create it!
         if(data.length === 0)
         {
            this.generateCollectionAndDocument();
         }

         // Otherwise the collection does exist and we assign the returned
         // documents to the public property of locations so this can be
         // iterated through in the component template
         else
         {
            this.locations = data;
            this.local = data;
         }
      })
      .catch();
   }

   addDocument() : void
   {
      this.navCtrl.push('create_module');
   }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ModulesPage');
  }

  updateDocument(obj) : void
  {
     let params : any = {
        collection   : this._COLL,
        location     : obj
     };
     this.navCtrl.push('select_module', { record : params, isEdited : true });
  }

  resetLocations()
  {
    this.locations = this.local;
  }

  searchModules(input : any){

    this.resetLocations();

    let val = input.target.value;
    if(val && val.trim() != '') {
      this.locations = this.locations.filter((mod) => {
        return(mod.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }




}
