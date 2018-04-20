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
  private storage: any;
  private ref: any;
  private url: any;
  private filename: string;

  public data = {};
  public csv = [["Module Name","Participant ID", "Date", "Data"]];
  public i = 0;

  constructor(public http: HttpClient) {
    console.log('Hello DatabaseQuestionsProvider Provider');
    this._DB = firebase.firestore();
    this.storage = firebase.storage();
    this.ref = this.storage.ref();

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
           owner    : doc.data().owner,
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

  getAnswers(collectionObj: string){
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
           owner    : doc.data().owner,
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
           owner         : doc.data().owner,
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
           every      : doc.data().every,
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
            owner    : doc.data().owner,
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

    exportStudies(collectionObj : string){

        this.data = {};

        this.data[collectionObj] = {};

        this._DB
        .collection(collectionObj)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.data[collectionObj][doc.id] = doc.data();
          })
          var myData =  JSON.stringify(this.data);
          this.ref.child('firestore-studies.json').putString(myData).then(function(snapshot) {
            console.log('Uploaded JSON');
          });
        })
        .catch((error : any) => {
          console.log(error);
        });
    }

    exportModules(collectionObj : string){

        this.data = {};

        this.data[collectionObj] = {};

        this._DB
        .collection(collectionObj)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.data[collectionObj][doc.id] = doc.data();
          })
          var myData =  JSON.stringify(this.data);
          this.ref.child('firestore-modules.json').putString(myData).then(function(snapshot) {
            console.log('Uploaded JSON');
          });
        })
        .catch((error : any) => {
          console.log(error);
        });
    }

    exportQuestions(collectionObj : string){

        this.data = {};

        this.data[collectionObj] = {};

        this._DB
        .collection(collectionObj)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.data[collectionObj][doc.id] = doc.data();
          })
          var myData =  JSON.stringify(this.data);
          this.ref.child('firestore-questions.json').putString(myData).then(function(snapshot) {
            console.log('Uploaded JSON');
          });
        })
        .catch((error : any) => {
          console.log(error);
        });
    }

    exportAnswers_Modules(moduleID : string, moduleName : string){

      this.data = {};
      this.csv = [["Module Name","Participant ID", "Date", "Data"]];
      this.i = 0;
      this.data[moduleID] = {};
      let userList = [];
      this._DB.collection("Answers").get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          userList.push(doc.id);
          this.data[moduleID][doc.id] = {};
        })
        this.createJSON(moduleID, userList, moduleName);
      })
      .catch((error : any) => {
        console.log(error);
      });
    }

    exportAnswers_Modules_helper(moduleID : string, user : any, moduleName : string){

      console.log(user);
      this._DB
      .collection("Answers").doc(user).collection(moduleID)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.i += 1;
          var myData = doc.data()
          var stringData = JSON.stringify(myData);
          this.csv[this.i] = [moduleName, user, doc.id, stringData];
          this.data[moduleID][user][doc.id] = doc.data();
        })

        this.uploadJSON(moduleName);

      })
    }

    createJSON(moduleID : string, userList : any, moduleName : string) {

      userList.forEach((user) =>{
        this.exportAnswers_Modules_helper(moduleID, user, moduleName);
      })

    }

    uploadJSON(moduleName : string) {
      console.log(this.data);
      console.log(this.csv);
      console.log(this.i);
      this.createCSV(moduleName);
      var myData =  JSON.stringify(this.data);
      this.filename = 'firestore-answers-to-module-' + moduleName + '.json';
      this.ref.child(this.filename).putString(myData).then(function(snapshot) {
        console.log('Uploaded JSON');
      });
    }

    createCSV(moduleName : string) {
      let csvContent = "";
      this.csv.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
      });


      this.filename = 'firestore-answers-to-module-' + moduleName + '.csv';
      this.ref.child(this.filename).putString(csvContent).then(function(snapshot) {
        console.log('Uploaded CSV');
      });
    }



    downloadStudies() : void {
      var fileRef = this.storage.ref('firestore-studies.json');
      this.url = fileRef.getDownloadURL();
      console.log(this.url);
    }

    downloadModules() : void {
      var fileRef = this.storage.ref('firestore-modules.json');
      this.url = fileRef.getDownloadURL();
      console.log(this.url);
    }

    downloadParticipants() : void {
      var fileRef = this.storage.ref('firestore-participants.json');
      this.url = fileRef.getDownloadURL();
      console.log(this.url);
    }

    downloadQuestions() : void {
      var fileRef = this.storage.ref('firestore-questions.json');
      this.url = fileRef.getDownloadURL();
      console.log(this.url);
    }

    downloadAnswers_Modules(moduleName : string): void {
      var fileRef = this.storage.ref('firestore-answers-to-module-' + moduleName + '.csv');
      this.url = fileRef.getDownloadURL();
      console.log(this.url);
    }

    returnURL() : any {
      return this.url;
    }


}
