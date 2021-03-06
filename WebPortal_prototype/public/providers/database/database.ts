import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// Import firebase and firestore
import * as firebase from 'firebase';
import 'firebase/firestore';

/*
  Generated class for the DatabaseProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private _DB: any;

  constructor(public http: HttpClient) {
    console.log('Hello DatabaseQuestionsProvider Provider');
    this._DB = firebase.firestore();
  }

  /**
  * Create the database collection and defines an initial document
  * Note the use of merge : true flag within the returned promise  - this
  * is needed to ensure that the collection is not repeatedly recreated should
  * this method be called again (we DON'T want to overwrite our documents!)
  */

  createAndPopulateDocument(collectionObj: string,
                            docID: string,
                            dataObj: any) : Promise<any>{
     return new Promise((resolve, reject) => {
       this._DB
       .collection(collectionObj)
       .doc(docID)
       .set(dataObj, {merge: true})
       .then((data : any) => {
         resolve(data);
       })
       .catch((error: any) => {
         reject(error);
       })
     })
  }

  /*
   * Return documents from specific database collection
   */

  getQuestions(collectionObj: string) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(collectionObj)
      .get()
      .then((querySnapshot) => {
        let obj : any = [];

        querySnapshot
        .forEach((doc: any) => {
          obj.push({
           id             : doc.id,
           name           : doc.data().name,
           type     : doc.data().type,
           qtext    : doc.data().qtext,
           option1  :doc.data().option1,
           option2  :doc.data().option2,
           option3  :doc.data().option3,
           option4  :doc.data().option4,
           option5  :doc.data().option5,
           option6  :doc.data().option6
          });
        });

        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }

  getQuestions_Modules(collectionObj: string) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(collectionObj)
      .get()
      .then((querySnapshot) => {
        let obj : any = [];

        querySnapshot
        .forEach((doc: any) => {
          obj.push({
           id             : doc.id,
           name           : doc.data().name,
           type     : doc.data().type,
           qtext    : doc.data().qtext,
          });
        });

        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }

  getParticipants(collectionObj: string) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(collectionObj)
      .get()
      .then((querySnapshot) => {
        let obj : any = [];

        querySnapshot
        .forEach((doc: any) => {
          obj.push({
           id             : doc.id,
           name           : doc.data().name,
           email          : doc.data().email,
           phone          : doc.data().phone,
           owner          : doc.data().owner,
           study          : doc.data().study,
           sleep_start    : doc.data().sleep_start,
           sleep_end      : doc.data().sleep_end
          });
        });

        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }

  getStudies(collectionObj: string) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(collectionObj)
      .get()
      .then((querySnapshot) => {
        let obj : any = [];

        querySnapshot
        .forEach((doc: any) => {
          obj.push({
           id             : doc.id,
           abstract           : doc.data().abstract,
           start_date         : doc.data().start_date,
           end_date          : doc.data().end_date,
           full_name          : doc.data().full_name,
           short_name    : doc.data().short_name,
          });
        });

        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }

  /*
   * Return documents from specific database collection
   */

  getModules(collectionObj: string) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(collectionObj)
      .get()
      .then((querySnapshot) => {
        let obj : any = [];

        querySnapshot
        .forEach((doc: any) => {
          obj.push({
           id             : doc.id,
           name           : doc.data().name,
           owner    : doc.data().owner,
           type     : doc.data().type,
           recurrence : doc.data().recurrence,
           start_time : doc.data().start_time,
           start_date : doc.data().start_date,
           end_date   : doc.data().end_date,
          });
        });

        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }


  getStudies_Modules(maincollectionObj: string, docObj : string, collectionObj : string) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
      .get()
      .then((querySnapshot) => {
        let obj : any = [];

        querySnapshot
        .forEach((doc: any) => {
          obj.push({
           id             : doc.id,
           name           : doc.data().name,
           owner          : doc.data().owner,
           type           : doc.data().type,
          });
        });

        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }

  getModules_Questions(maincollectionObj: string, docObj : string, collectionObj : string) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
      .get()
      .then((querySnapshot) => {
        let obj : any = [];

        querySnapshot
        .forEach((doc: any) => {
          obj.push({
            id             : doc.id,
            quest_id       : doc.data().id,
            name           : doc.data().name,
            type     : doc.data().type,
            qtext    : doc.data().qtext,
          });
        });

        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }



  /**
   * Add a new document to a selected database collection
   */

  addDocument(collectionObj : string,
              dataObj : any) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(collectionObj).add(dataObj)
      .then((obj : any) => {
        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }

  addStudies_Modules(maincollectionObj: string, docObj : string,
                     collectionObj : string, dataObj : any) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
      .add(dataObj)
      .then((obj : any) => {
        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }

  addModules_Questions(maincollectionObj: string, docObj : string,
                     collectionObj : string, dataObj : any) : Promise<any>{
    return new Promise((resolve, reject) => {
      this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
      .add(dataObj)
      .then((obj : any) => {
        resolve(obj);
      })
      .catch((error : any) => {
        reject(error);
      });
    });
  }
  /**
   * Delete an existing document from a selected database collection
   */


   deleteDocument(collectionObj : string,
                  docID : string) : Promise<any>{
      return new Promise((resolve, reject) => {
        this._DB
        .collection(collectionObj)
        .doc(docID)
        .delete()
        .then((obj : any) => {
          resolve(obj);
        })
        .catch((error : any) => {
          reject(error);
        });
      });
    }

    /**
     * Update an existing document within a selected database collection
     */

    updateDocument(collectionObj : string,
                    docID : string,
                    dataObj : any) : Promise<any>{
      return new Promise((resolve, reject) => {
        this._DB
        .collection(collectionObj)
        .doc(docID)
        .update(dataObj)
        .then((obj : any) => {
          resolve(obj);
        })
        .catch((error : any) => {
          reject(error);
        });
      });
    }

    viewDocument(collectionObj : string,
                    docID : string,
                    dataObj : any) : Promise<any>{
      return new Promise((resolve, reject) => {
        this._DB
        .collection(collectionObj)
        .doc(docID)
        .then((obj : any) => {
          resolve(obj);
        })
        .catch((error : any) => {
          reject(error);
        });
      });
    }

}
