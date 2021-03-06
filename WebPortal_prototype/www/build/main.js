webpackJsonp([17],{

/***/ 1027:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import firebase and firestore


/*
  Generated class for the DatabaseProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(http) {
        this.http = http;
        this.data = {};
        this.csv = [["Module Name", "Participant ID", "Date", "Data"]];
        this.i = 0;
        this.j = 0;
        this.participantList = [["Number", "Participant ID"]];
        console.log('Hello DatabaseQuestionsProvider Provider');
        this._DB = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
        this.storage = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]();
        this.ref = this.storage.ref();
    }
    /**
    * Create the database collection and defines an initial document
    * Note the use of merge : true flag within the returned promise  - this
    * is needed to ensure that the collection is not repeatedly recreated should
    * this method be called again (we DON'T want to overwrite our documents!)
    */
    DatabaseProvider.prototype.createAndPopulateDocument = function (collectionObj, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .set(dataObj, { merge: true })
                .then(function (data) {
                resolve(data);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
     * Return documents from specific database collection
     */
    DatabaseProvider.prototype.getQuestions = function (collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        name: doc.data().name,
                        type: doc.data().type,
                        qtext: doc.data().qtext,
                        owner: doc.data().owner,
                        option1: doc.data().option1,
                        option2: doc.data().option2,
                        option3: doc.data().option3,
                        option4: doc.data().option4,
                        option5: doc.data().option5,
                        option6: doc.data().option6,
                        option7: doc.data().option7,
                        option8: doc.data().option8,
                        option9: doc.data().option9,
                        option10: doc.data().option10,
                        option11: doc.data().option11,
                        option12: doc.data().option12,
                        option13: doc.data().option13,
                        option14: doc.data().option14,
                        option15: doc.data().option15,
                        option16: doc.data().option16,
                        option17: doc.data().option17,
                        option18: doc.data().option18,
                        option19: doc.data().option19,
                        option20: doc.data().option20,
                        leftLabel: doc.data().leftLabel,
                        rightLabel: doc.data().rightLabel
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getQuestions_Modules = function (collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        name: doc.data().name,
                        type: doc.data().type,
                        qtext: doc.data().qtext,
                        owner: doc.data().owner,
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getParticipants = function (collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        name: doc.data().name,
                        email: doc.data().email,
                        phone: doc.data().phone,
                        owner: doc.data().owner,
                        study: doc.data().study,
                        sleep_start: doc.data().sleep_start,
                        sleep_end: doc.data().sleep_end
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getStudies = function (collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        abstract: doc.data().abstract,
                        start_date: doc.data().start_date,
                        end_date: doc.data().end_date,
                        end_time: doc.data().end_time,
                        full_name: doc.data().full_name,
                        short_name: doc.data().short_name,
                        owner: doc.data().owner,
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
     * Return documents from specific database collection
     */
    DatabaseProvider.prototype.getModules = function (collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        name: doc.data().name,
                        owner: doc.data().owner,
                        type: doc.data().type,
                        recurrence: doc.data().recurrence,
                        start_time: doc.data().start_time,
                        start_date: doc.data().start_date,
                        end_date: doc.data().end_date,
                        every: doc.data().every,
                        every_hour: doc.data().every_hour,
                        every_minute: doc.data().every_minute,
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getStudies_Modules = function (maincollectionObj, docObj, collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        name: doc.data().name,
                        owner: doc.data().owner,
                        type: doc.data().type,
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getModules_Questions = function (maincollectionObj, docObj, collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        quest_id: doc.data().id,
                        name: doc.data().name,
                        type: doc.data().type,
                        qtext: doc.data().qtext,
                        owner: doc.data().owner,
                        moduleID: doc.data().moduleID,
                        options: doc.data().options
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Add a new document to a selected database collection
     */
    DatabaseProvider.prototype.addDocument = function (collectionObj, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj).add(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.addStudies_Modules = function (maincollectionObj, docObj, collectionObj, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
                .add(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.addModules_Questions = function (maincollectionObj, docObj, collectionObj, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
                .add(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.getAnswers = function () {
    };
    DatabaseProvider.prototype.addModules_First_Question = function (maincollectionObj, docObj, collectionObj, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
                .doc("0").set({
                id: dataObj.id,
                moduleID: dataObj.moduleID,
                quest_id: dataObj.id,
                name: dataObj.name,
                type: dataObj.type,
                qtext: dataObj.qtext,
                owner: dataObj.owner
            })
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.addModules_First_Question_Multi = function (maincollectionObj, docObj, collectionObj, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
                .doc("0").set({
                id: dataObj.id,
                moduleID: dataObj.moduleID,
                quest_id: dataObj.id,
                name: dataObj.name,
                type: dataObj.type,
                qtext: dataObj.qtext,
                owner: dataObj.owner,
                option1: dataObj.option1,
                option2: dataObj.option2,
                option3: dataObj.option3,
                option4: dataObj.option4,
                option5: dataObj.option5,
                option6: dataObj.option6,
                option7: dataObj.option7,
                option8: dataObj.option8,
                option9: dataObj.option9,
                option10: dataObj.option10,
                option11: dataObj.option11,
                option12: dataObj.option12,
                option13: dataObj.option13,
                option14: dataObj.option14,
                option15: dataObj.option15,
                option16: dataObj.option16,
                option17: dataObj.option17,
                option18: dataObj.option18,
                option19: dataObj.option19,
                option20: dataObj.option20,
                options: dataObj.options,
            })
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.addModules_First_Question_Slider = function (maincollectionObj, docObj, collectionObj, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(maincollectionObj).doc(docObj).collection(collectionObj)
                .doc("0").set({
                id: dataObj.id,
                moduleID: dataObj.moduleID,
                quest_id: dataObj.id,
                name: dataObj.name,
                type: dataObj.type,
                qtext: dataObj.qtext,
                owner: dataObj.owner,
                leftLabel: dataObj.leftLabel,
                rightLabel: dataObj.rightLabel
            })
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Delete an existing document from a selected database collection
     */
    DatabaseProvider.prototype.deleteDocument = function (collectionObj, docID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .delete()
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.deleteNestedCollection = function (collectionObj, docID, subColleciton, quest_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .collection(subColleciton)
                .doc(quest_id)
                .delete()
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Update an existing document within a selected database collection
     */
    DatabaseProvider.prototype.updateDocument = function (collectionObj, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .update(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.updateModules_Questions = function (maincollectionObj, modID, collectionObj, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(maincollectionObj)
                .doc(modID)
                .collection(collectionObj)
                .doc(docID)
                .update(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.viewDocument = function (collectionObj, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.exportStudies = function (collectionObj) {
        var _this = this;
        this.data = {};
        this.data[collectionObj] = {};
        this._DB
            .collection(collectionObj)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                _this.data[collectionObj][doc.id] = doc.data();
            });
            var myData = JSON.stringify(_this.data);
            _this.ref.child('firestore-studies.json').putString(myData).then(function (snapshot) {
                console.log('Uploaded JSON');
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DatabaseProvider.prototype.exportModules = function (collectionObj) {
        var _this = this;
        this.data = {};
        this.data[collectionObj] = {};
        this._DB
            .collection(collectionObj)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                _this.data[collectionObj][doc.id] = doc.data();
            });
            var myData = JSON.stringify(_this.data);
            _this.ref.child('firestore-modules.json').putString(myData).then(function (snapshot) {
                console.log('Uploaded JSON');
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DatabaseProvider.prototype.exportQuestions = function (collectionObj) {
        var _this = this;
        this.data = {};
        this.data[collectionObj] = {};
        this._DB
            .collection(collectionObj)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                _this.data[collectionObj][doc.id] = doc.data();
            });
            var myData = JSON.stringify(_this.data);
            _this.ref.child('firestore-questions.json').putString(myData).then(function (snapshot) {
                console.log('Uploaded JSON');
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DatabaseProvider.prototype.exportAnswers_Modules = function (moduleID, moduleName) {
        var _this = this;
        this.data = {};
        this.csv = [["Module Name", "Participant ID", "Date", "Data"]];
        this.i = 0;
        this.data[moduleID] = {};
        var userList = [];
        this._DB.collection("Answers").get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                userList.push(doc.id);
                _this.data[moduleID][doc.id] = {};
            });
            return Promise.resolve(userList);
        })
            .catch(function (error) {
            console.log(error);
        });
        return Promise.resolve(userList);
    };
    DatabaseProvider.prototype.exportParticipants = function (owner) {
        var _this = this;
        var participantList = [["Number", "Participant ID"]];
        this.i = 1;
        this._DB.collection("Participants").get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                if (doc.data().owner == owner) {
                    participantList[_this.i] = [_this.i, doc.id];
                    _this.i += 1;
                }
            });
            return Promise.resolve(participantList);
        })
            .catch(function (error) {
            console.log(error);
        });
        return Promise.resolve(participantList);
    };
    DatabaseProvider.prototype.exportAnswers_Modules_helper = function (moduleID, user, moduleName) {
        var _this = this;
        console.log(user);
        this._DB
            .collection("Answers").doc(user).collection(moduleName)
            .get()
            .then(function (snapshot) {
            snapshot.forEach(function (doc) {
                _this.i += 1;
                var myData = doc.data();
                var stringData = JSON.stringify(myData);
                _this.csv[_this.i] = [moduleName, user, doc.id, stringData];
                _this.data[moduleID][user][doc.id] = doc.data();
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DatabaseProvider.prototype.createJSON = function (moduleID, userList, moduleName) {
        var _this = this;
        this.j = 0;
        userList.forEach(function (user) {
            _this.exportAnswers_Modules_helper(moduleID, user, moduleName);
            _this.j += 1;
        });
        if (this.j == userList.length) {
            return Promise.resolve(moduleName);
        }
    };
    DatabaseProvider.prototype.uploadJSON = function (moduleName) {
        console.log(this.data);
        console.log(this.csv);
        console.log(this.i);
        this.createCSV(moduleName);
        var that = this;
        var myData = JSON.stringify(this.data);
        this.filename = 'firestore-answers-to-module-' + moduleName + '.json';
        this.ref.child(this.filename).putString(myData).then(function (snapshot) {
            console.log('Uploaded JSON');
            return Promise.resolve(moduleName);
        })
            .catch(function (error) {
            console.log(error);
        });
        return Promise.resolve(moduleName);
    };
    DatabaseProvider.prototype.createCSV = function (moduleName) {
        var csvContent = "";
        this.csv.forEach(function (rowArray) {
            var row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
        this.filename = 'firestore-answers-to-module-' + moduleName + '.csv';
        this.ref.child(this.filename).putString(csvContent).then(function (snapshot) {
            console.log('Uploaded CSV');
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    DatabaseProvider.prototype.createParticipantCSV = function (participantList) {
        var csvContent = "";
        participantList.forEach(function (rowArray) {
            var row = rowArray.join(",");
            csvContent += row + "\r\n";
        });
        this.filename = 'firestore-participants.csv';
        this.ref.child(this.filename).putString(csvContent).then(function (snapshot) {
            console.log('Uploaded CSV');
            return Promise.resolve(participantList);
        })
            .catch(function (error) {
            console.log(error);
        });
        return Promise.resolve(participantList);
    };
    DatabaseProvider.prototype.downloadAnswers_Modules = function (moduleName) {
        var fileRef = this.storage.ref('firestore-answers-to-module-' + moduleName + '.csv');
        this.url = fileRef.getDownloadURL();
        console.log(this.url);
        return Promise.resolve(this.url);
    };
    DatabaseProvider.prototype.downloadParticipants = function () {
        var fileRef = this.storage.ref('firestore-participants.csv');
        this.url = fileRef.getDownloadURL();
        console.log(this.url);
        return Promise.resolve(this.url);
    };
    DatabaseProvider.prototype.returnURL = function () {
        return this.url;
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 1095:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1122:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1134:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1134;

/***/ }),

/***/ 1136:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1136;

/***/ }),

/***/ 1137:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1137;

/***/ }),

/***/ 1216:
/***/ (function(module, exports) {

module.exports = {"type":"service_account","project_id":"capstone-sugar","private_key_id":"a6251a0043b8c6de12fd46edeafe35e1ff477bf6","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDR08lrbz7sPTHl\nzuf1jsevqQSfXVFRSP99wR7x/50pt76oOmyHCUbmAFyh58jNB0B3jsMhI4ynpsjK\na3V4xs+DwXixnX5gDXjKH2zKJZE1z+678N/RQix9Y7nt7+m9zE3Hfqh3CwsBWpwN\no3IQznxaY0PrRwEvZkma9FcrKMuMYVjnH/kgxDD24HZ8P90qR6GeWwn2aKouKuos\nv0ATmHfWIzs2YrW9FUfY0wNmWsJdOwWR6e8PbmVqDDm/6iLjQoNuddN0J9X0fztg\nf3fhCo9qFo8G30mQhjiXmFfMEk+h8aJvTE5KO+zLVMCXOrG59z0vFbwkbIRh72Zu\nNW6eXZnvAgMBAAECggEARZdgbmlvDRseuYFuHVtFj1UXW2Ov3K3BTwwGH20Pyw5O\nBa2a4Q6KnS3xiyE80ANftkd7IDqSI+iFH92UEIKfwKsiRIZfq6vMK/1QL5tWFero\n2xyAnv67krrIp8myVGi2QzwW06St+bz7lOpoonpZdAEIPbhHBFmAgAwZ/Q6CtAPb\nVyq6PSloVUoEjCzJb1K5g5uW/GacVTQjatY0CAPtsLlHxdf5ZFSIdZWh1T0q+kP4\nUdZg2XHfFXhSyNjsNSyP4QRoRndM6k/3FrGDIZ+0fZme9Jjgn8RX6RqHpNwf9FQI\n7k9uqHLbYEX1xHnr9hExLKvynsF3UchaqnjcXyfQwQKBgQD2rOSWUqX91RIO6OF0\nhlLYfXdlCoN6EiP6JvOqzX4snI5wb6xUVL76jZAKrS9LfVd2PfEzPFmXQIPkd/pn\nRbukWBeE4/CjdSx2UTDbyqGlt54EXc8aOWyiOVkfA41Cl6oUoa51vrr+KNiSeK24\nF3rdWri/yJsDkZSwOfpwVwq8DQKBgQDZwk+IZp6nOnbyAihajZOiI/A9RyFK6u6f\nARCpLPIutxiySfdO47KVKPzIitMU/CrzCk5BVq0/5TqY6xWlBkrK89UzBE00jR3M\n/X37TwDqGxQ8ejywsuhQNAHH0Z1lyqIJ9agOuUcI+tlja4iKpE9ASlzOQKJqQbTs\ncT6WWh5i6wKBgQC3AFUlYHNc+PHIteRs+ioECjDFeSNJMKQYNUWYdZMhrZPOvkpu\n1eBJKTSvdwQbUQXN5u5GQIOGvooauRe//e/TYLcyE5i263rs3BcPOCjsNGi6fI3k\nuq1pPHptk8j8ml/HppszJyi63bquD3FxnZm9FkzxmvXFk/9nLdwp86k3EQKBgDCs\nj0yE66ejmNzFgLGk/b/7WoLH+HgfhVEDUu8NveCVSq7ne6ElolBXBhHpff8t0ofa\n4N0X+8fRfEScH41wl50/3YL2zi8V7/hXHSbkZObvQJm4FQLGKslqpo88mnsbTRb+\n0x7faTJnp9niOnYK/i/3r0DnD6bCoydKtNu0ryAbAoGALwMjjXXb5D32i2K2ccP1\nkfqTcjohfQnflfO90QqsW5dRMluuaYinsAweCWUF7xp62xAbZ/fQ91GqUL6NAe8H\n8ZHtJJFhjWPITRLH0QO/LetSpWcDbmSSjJ6VzUZwabyoXgvybTUN0Ounv+Y/soau\nQX88XqdMdudIdICD5z4LM4M=\n-----END PRIVATE KEY-----\n","client_email":"firebase-adminsdk-mbprx@capstone-sugar.iam.gserviceaccount.com","client_id":"104756784904874989335","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mbprx%40capstone-sugar.iam.gserviceaccount.com"}

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, _US, _DB) {
        this.navCtrl = navCtrl;
        this._US = _US;
        this._DB = _DB;
        this._COLL = "Studies";
        this.studies = [];
        this.end_studies = [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
        this.email = this._US.returnUser();
    };
    HomePage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getStudies(this._COLL)
            .then(function (data) {
            _this.locations = data;
            var i = 0;
            var currentDay = new Date();
            for (i; i < _this.locations.length; i++) {
                if (_this.email == _this.locations[i].owner) {
                    var location_end = new Date(_this.locations[i].end_date);
                    if (currentDay > location_end) {
                        _this.end_studies.push(_this.locations[i]);
                    }
                    else {
                        _this.studies.push(_this.locations[i]);
                    }
                }
            }
        })
            .catch();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SCHEMA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div id="page-container">\n\n    <h3>Home Page</h3>\n\n    <br><br><br>\n\n    <div id="owner-current-studies">\n      <ion-grid class="table">\n        <h4>My Studies</h4>\n        <ion-row class="grid-labels">\n          <ion-col col-9>Name</ion-col>\n        </ion-row>\n        <div *ngFor=\'let study of studies\'>\n          <div *ngIf = "email == study.owner">\n            <ion-row>\n              <ion-col col-9> {{ study.full_name }}</ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-grid>\n    </div>\n    <br><br><br><br>\n    <div id="owner-completed-studies">\n      <ion-grid class="table">\n        <h4>My Completed Studies</h4>\n        <ion-row class="grid-labels">\n          <ion-col col-9>Name</ion-col>\n        </ion-row>\n        <div *ngFor="let study of end_studies">\n          <ion-row>\n            <ion-col col-9> {{ study.full_name }} </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgotPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPassPage = (function () {
    function ForgotPassPage(navCtrl, navParams, _ALERT, _US) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ALERT = _ALERT;
        this._US = _US;
    }
    ForgotPassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPassPage');
    };
    ForgotPassPage.prototype.sendResetPassword = function () {
        this._US.sendResetPassword(this.email);
        this.displayAlert('Success', 'An email has been sent to: ' + this.email);
    };
    ForgotPassPage.prototype.displayAlert = function (title, message) {
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: ['Got it!']
        });
        alert.present();
    };
    ForgotPassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-pass',template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/forgot_pass/forgot_pass.html"*/'<!--\n  Generated template for the ForgotPassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n       <ion-label stacked>Email</ion-label>\n       <ion-input type="email" [(ngModel)]="email" name="email" placeholder="eg. john@doe.com"></ion-input>\n     </ion-item>\n\n     <div padding text-center>\n       <button ion-button color="default" round (click)="sendResetPassword()" >Reset Password</button>\n     </div>\n\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/forgot_pass/forgot_pass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]])
    ], ForgotPassPage);
    return ForgotPassPage;
}());

//# sourceMappingURL=forgot_pass.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_pass_forgot_pass__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usersservice_usersservice__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(usersService, loadingCtrl, toastCtrl, navCtrl, navParams, _US) {
        this.usersService = usersService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._US = _US;
        __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                //this.navCtrl.push(HomePage);
                // ...
            }
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this._US.logoutUserService();
        console.log("User has been signed out");
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...."
        });
        loader.present();
        this.usersService.loginUserService(this.email, this.password).then(function (authData) {
            //successful
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
        }, function (error) {
            loader.dismiss();
            //Unable to log in
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 9000,
                position: 'top'
            });
            toast.present();
            that.password = ""; //empty password field
        });
    };
    LoginPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_pass_forgot_pass__["a" /* ForgotPassPage */]);
    };
    LoginPage.prototype.redirectToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email" name="email" required="required"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding text-center>\n\n    <button *ngIf="email && password " ion-button color="default" round (click)="submitLogin()">\n     Login</button>\n   <!-- Show dead button if form is not filled -->\n   <button *ngIf="!email || !password" ion-button color="deafault" clear round>Login</button>\n\n  </div>\n\n  <br>\n\n  <div padding text-center>\n   <button ion-button color="gray" block clear (click)="forgotPassword()">Forgot Password</button>\n  </div>\n\n\n   <div padding text-center>\n     <button ion-button color="gray" block clear (click)="redirectToSignup()">Create new account</button>\n   </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(usersserviceProvider, navCtrl, navParams, toastCtrl, loadingCtrl) {
        this.usersserviceProvider = usersserviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.usersserviceProvider.signupUserService(this.email, this.password).then(function (authData) {
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 9000,
                position: 'top'
            }).present();
            that.password = "";
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n   <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email" name="email" placeholder="eg. john@doe.com"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n    </ion-item>\n\n    <ion-item >\n        <ion-label stacked>Phone</ion-label>\n        <ion-input type="text" [(ngModel)]="phone" name="phone" placeholder="eg. 0802222222" required="required"></ion-input>\n    </ion-item>\n\n<hr/>\n    <ion-item>\n      <ion-label stacked>First name</ion-label>\n      <ion-input type="text" [(ngModel)]="first_name" name="first_name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Last name</ion-label>\n      <ion-input type="text" [(ngModel)]="last_name" name="last_name"></ion-input>\n    </ion-item>\n\n    <div padding text-center>\n      <button ion-button color="default" round (click)="doSignup()" >Sign Up</button>\n    </div>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/signup/signup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ModulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModulesPage = (function () {
    function ModulesPage(navCtrl, _DB, _US) {
        this.navCtrl = navCtrl;
        this._DB = _DB;
        this._US = _US;
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description      Defines the name of the database collection
         */
        this._COLL = "Modules";
        /**
         * @name _DOC
         * @type {string}
         * @private
         * @description      Defines the initial document ID for the database collection
         */
        this._DOC = "lNE0Z5IRAWtMJN4BujuD";
        this.flag = false;
        this.firstFlag = false;
        this.secondFlag = false;
        this._CONTENT = {
            name: "Test",
            owner: "Natasha",
            type: "TimeBased"
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
    ModulesPage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
        this.email = this._US.returnUser();
        this.searchbar = '';
    };
    /**
     * Creates the collection and populates that with an initial document
     * using the createAndPopulateDocument method of the DatabaseProvider
     * service
     *
     * @public
     * @method generateCollectionAndDocument
     * @return {none}
     */
    ModulesPage.prototype.generateCollectionAndDocument = function () {
        this._DB.createAndPopulateDocument(this._COLL, this._DOC, this._CONTENT)
            .then(function (data) {
            console.dir(data);
        })
            .catch(function (error) {
            console.dir(error);
        });
    };
    /**
     * Retrieve all documents from the specified collection using the
     * getDocuments method of the DatabaseProvider service
     *
     * @public
     * @method retrieveCollection
     * @return {none}
     */
    ModulesPage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getModules(this._COLL)
            .then(function (data) {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
                _this.generateCollectionAndDocument();
            }
            else {
                _this.locations = data;
                _this.local = data;
            }
        })
            .catch();
    };
    ModulesPage.prototype.addDocument = function () {
        this.navCtrl.push('create_module');
    };
    ModulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModulesPage');
    };
    ModulesPage.prototype.updateDocument = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('select_module', { record: params, isEdited: true });
    };
    ModulesPage.prototype.resetLocations = function () {
        this.locations = this.local;
    };
    ModulesPage.prototype.searchModules = function (input) {
        this.resetLocations();
        var val = input.target.value;
        if (val && val.trim() != '') {
            this.locations = this.locations.filter(function (mod) {
                return (mod.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ModulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modules',template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/modules/modules.html"*/'<!--\n  Generated template for the ModulesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Modules</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button\n      ion-button\n      block\n      color=\'primary\'\n      (click)=\'addDocument()\'>\n      Create a new module\n    </button>\n\n    <ion-searchbar [(ngModel)] = "searchbar" (ionInput)="searchModules($event)"></ion-searchbar>\n    <div *ngFor=\'let location of locations\'>\n      <div *ngIf = "email == location.owner">\n        <button ion-item (click)="updateDocument(location)">\n          {{location.name}}\n          <div class="item-note" item-end>\n            {{location.type}}\n          </div>\n        </button>\n      </div>\n    </div>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/modules/modules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]])
    ], ModulesPage);
    return ModulesPage;
}());

//# sourceMappingURL=modules.js.map

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 353;

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/branching/branching.module": [
		1217,
		12
	],
	"../pages/create_module/create_module.module": [
		1218,
		11
	],
	"../pages/create_participant/create_participant.module": [
		1219,
		10
	],
	"../pages/create_question/create_question.module": [
		1220,
		9
	],
	"../pages/create_questionDate/create_questionDate.module": [
		1221,
		8
	],
	"../pages/create_questionMulti/create_questionMulti.module": [
		1222,
		7
	],
	"../pages/create_questionNumber/create_questionNumber.module": [
		1223,
		6
	],
	"../pages/create_questionRadio/create_questionRadio.module": [
		1224,
		5
	],
	"../pages/create_questionSlider/create_questionSlider.module": [
		1225,
		4
	],
	"../pages/create_questionTime/create_questionTime.module": [
		1226,
		3
	],
	"../pages/create_study/create_study.module": [
		1227,
		2
	],
	"../pages/forgot_pass/forgot_pass.module": [
		1228,
		16
	],
	"../pages/login/login.module": [
		1229,
		15
	],
	"../pages/modules/modules.module": [
		1230,
		14
	],
	"../pages/select_module/select_module.module": [
		1231,
		1
	],
	"../pages/select_study/select_study.module": [
		1232,
		0
	],
	"../pages/signup/signup.module": [
		1233,
		13
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 394;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudiesPage = (function () {
    function StudiesPage(navCtrl, _DB, _US, _ALERT) {
        this.navCtrl = navCtrl;
        this._DB = _DB;
        this._US = _US;
        this._ALERT = _ALERT;
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description      Defines the name of the database collection
         */
        this._COLL = "Studies";
        /**
         * @name _DOC
         * @type {string}
         * @private
         * @description      Defines the initial document ID for the database collection
         */
        this._DOC = "81XU1moWva6onAtMHpYY";
        this.flag = false;
        this._CONTENT = {
            full_name: "test",
            abstract: ""
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
    StudiesPage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
        this.email = this._US.returnUser();
        this.searchbar = '';
        console.log(this.email);
    };
    /**
     * Creates the collection and populates that with an initial document
     * using the createAndPopulateDocument method of the DatabaseProvider
     * service
     *
     * @public
     * @method generateCollectionAndDocument
     * @return {none}
     */
    StudiesPage.prototype.generateCollectionAndDocument = function () {
        this._DB.createAndPopulateDocument(this._COLL, this._DOC, this._CONTENT)
            .then(function (data) {
            console.dir(data);
        })
            .catch(function (error) {
            console.dir(error);
        });
    };
    /**
     * Retrieve all documents from the specified collection using the
     * getDocuments method of the DatabaseProvider service
     *
     * @public
     * @method retrieveCollection
     * @return {none}
     */
    StudiesPage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getStudies(this._COLL)
            .then(function (data) {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
                _this.generateCollectionAndDocument();
            }
            else {
                _this.locations = data;
                _this.local = data;
            }
        })
            .catch();
    };
    /**
     * Navigate to the manage-document component to begin adding a new document
     *
     * @public
     * @method addDocument
     * @return {none}
     */
    StudiesPage.prototype.addDocument = function () {
        this.navCtrl.push('create_study');
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateDocument
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    StudiesPage.prototype.updateDocument = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('select_study', { record: params, isEdited: true });
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method viewDocument
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    StudiesPage.prototype.viewDocument = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('select_study', { record: params, isEdited: true });
    };
    /**
     * Delete a document from the Cloud Firestore collection using the
     * deleteDocument method of the DatabaseProvider service
     *
     * @public
     * @method deleteDocument
     * @param  obj          {Object}           The document ID for the document we wish to delete
     * @return {none}
     */
    StudiesPage.prototype.deleteDocument = function (obj) {
        var _this = this;
        this._DB.deleteDocument(this._COLL, obj.id)
            .then(function (data) {
            _this.displayAlert('Success', 'The record ' + obj.name + ' was successfully removed');
        })
            .catch(function (error) {
            _this.displayAlert('Error', error.message);
        });
    };
    StudiesPage.prototype.resetLocations = function () {
        this.locations = this.local;
    };
    StudiesPage.prototype.searchStudies = function (input) {
        this.resetLocations();
        var val = input.target.value;
        if (val && val.trim() != '') {
            this.locations = this.locations.filter(function (study) {
                return (study.short_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    /**
     * Provide feedback to user after an operation has succeeded/failed
     *
     * @public
     * @method displayAlert
     * @param  title          {String}           Heading for alert message
     * @param  message        {String}           Content for alert message
     * @return {none}
     */
    StudiesPage.prototype.displayAlert = function (title, message) {
        var _this = this;
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: 'Got It!',
                    handler: function () {
                        _this.retrieveCollection();
                    }
                }]
        });
        alert.present();
    };
    StudiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studies',template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/studies/studies.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Studies</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <button\n    ion-button\n    block\n    color=\'primary\'\n    (click)=\'addDocument()\'>\n    Add a new Study\n  </button>\n\n  <ion-searchbar [(ngModel)] = "searchbar" (ionInput)="searchStudies($event)"></ion-searchbar>\n  <div *ngFor=\'let location of locations\'>\n    <div *ngIf = "email == location.owner">\n      <button ion-item (click)="updateDocument(location)">\n        {{location.short_name}}\n        <div class="item-note" item-end>\n          {{location.abstract}}\n        </div>\n      </button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/studies/studies.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], StudiesPage);
    return StudiesPage;
}());

//# sourceMappingURL=studies.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsPage = (function () {
    function QuestionsPage(navCtrl, _DB, _US, _ALERT) {
        this.navCtrl = navCtrl;
        this._DB = _DB;
        this._US = _US;
        this._ALERT = _ALERT;
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description      Defines the name of the database collection
         */
        this._COLL = "Questions";
        /**
         * @name _DOC
         * @type {string}
         * @private
         * @description      Defines the initial document ID for the database collection
         */
        this._DOC = "Xy76Re34SdFR1";
        this._CONTENT = {
            name: "",
            type: "",
            qtext: ""
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
    QuestionsPage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
        this.email = this._US.returnUser();
        this.searchbar = '';
    };
    /**
     * Creates the collection and populates that with an initial document
     * using the createAndPopulateDocument method of the DatabaseProvider
     * service
     *
     * @public
     * @method generateCollectionAndDocument
     * @return {none}
     */
    QuestionsPage.prototype.generateCollectionAndDocument = function () {
        this._DB.createAndPopulateDocument(this._COLL, this._DOC, this._CONTENT)
            .then(function (data) {
            console.dir(data);
        })
            .catch(function (error) {
            console.dir(error);
        });
    };
    /**
     * Retrieve all documents from the specified collection using the
     * getDocuments method of the DatabaseProvider service
     *
     * @public
     * @method retrieveCollection
     * @return {none}
     */
    QuestionsPage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getQuestions(this._COLL)
            .then(function (data) {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
                _this.generateCollectionAndDocument();
            }
            else {
                _this.locations = data;
                _this.local = data;
            }
        })
            .catch();
    };
    /**
     * Navigate to the manage-document component to begin adding a new document
     *
     * @public
     * @method addDocument
     * @return {none}
     */
    QuestionsPage.prototype.addDocument = function () {
        this.navCtrl.push('create_question');
    };
    QuestionsPage.prototype.addRadio = function () {
        this.navCtrl.push('create_questionRadio');
    };
    QuestionsPage.prototype.addMulti = function () {
        this.navCtrl.push('create_questionMulti');
    };
    QuestionsPage.prototype.addSlider = function () {
        this.navCtrl.push('create_questionSlider');
    };
    QuestionsPage.prototype.addTime = function () {
        this.navCtrl.push('create_questionTime');
    };
    QuestionsPage.prototype.addDate = function () {
        this.navCtrl.push('create_questionDate');
    };
    QuestionsPage.prototype.addNumber = function () {
        this.navCtrl.push('create_questionNumber');
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateDocument
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    QuestionsPage.prototype.updateDocument = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_question', { record: params, isEdited: true });
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateRadio
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    QuestionsPage.prototype.updateRadio = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_questionRadio', { record: params, isEdited: true });
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateMulti
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    QuestionsPage.prototype.updateMulti = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_questionMulti', { record: params, isEdited: true });
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateSlider
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    QuestionsPage.prototype.updateSlider = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        console.log(obj.id);
        this.navCtrl.push('create_questionSlider', { record: params, isEdited: true });
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateTime
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    QuestionsPage.prototype.updateTime = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_questionTime', { record: params, isEdited: true });
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateDate
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    QuestionsPage.prototype.updateDate = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_questionDate', { record: params, isEdited: true });
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateNumber
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    QuestionsPage.prototype.updateNumber = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_questionNumber', { record: params, isEdited: true });
    };
    /**
     * Delete a document from the Cloud Firestore collection using the
     * deleteDocument method of the DatabaseProvider service
     *
     * @public
     * @method deleteDocument
     * @param  obj          {Object}           The document ID for the document we wish to delete
     * @return {none}
     */
    QuestionsPage.prototype.deleteDocument = function (obj) {
        var _this = this;
        this._DB.deleteDocument(this._COLL, obj.id)
            .then(function (data) {
            _this.displayAlert('Success', 'The question ' + obj.name + ' was successfully removed');
        })
            .catch(function (error) {
            _this.displayAlert('Error', error.message);
        });
    };
    QuestionsPage.prototype.resetLocations = function () {
        this.locations = this.local;
    };
    QuestionsPage.prototype.searchQuestions = function (input) {
        this.resetLocations();
        var val = input.target.value;
        if (val && val.trim() != '') {
            this.locations = this.locations.filter(function (question) {
                return (question.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    /**
     * Provide feedback to user after an operation has succeeded/failed
     *
     * @public
     * @method displayAlert
     * @param  title          {String}           Heading for alert message
     * @param  message        {String}           Content for alert message
     * @return {none}
     */
    QuestionsPage.prototype.displayAlert = function (title, message) {
        var _this = this;
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: 'Got It!',
                    handler: function () {
                        _this.retrieveCollection();
                    }
                }]
        });
        alert.present();
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/questions/questions.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Schema\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class = "row">\n    <div class = "col">\n      <button\n        ion-button\n        block\n        color=\'primary\'\n        (click)=\'addDocument()\'>\n        Add a new textbox question\n      </button>\n    </div>\n\n    <div class = "col">\n      <button\n        ion-button\n        block\n        color=\'primary\'\n        (click)=\'addRadio()\'>\n        Add a new radio question\n      </button>\n    </div>\n\n    <div class = "col">\n      <button\n        ion-button\n        block\n        color=\'primary\'\n        (click)=\'addMulti()\'>\n        Add a new multiple response question\n      </button>\n    </div>\n\n    <div class = "col">\n      <button\n        ion-button\n        block\n        color=\'primary\'\n        (click)=\'addSlider()\'>\n        Add a new visual analog scale question\n      </button>\n    </div>\n\n\n    <div class = "col">\n      <button\n        ion-button\n        block\n        color=\'primary\'\n        (click)=\'addTime()\'>\n        Add a new time based question\n      </button>\n    </div>\n\n    <div class = "col">\n      <button\n        ion-button\n        block\n        color=\'primary\'\n        (click)=\'addDate()\'>\n        Add a new Date question\n      </button>\n    </div>\n\n    <div class = "col">\n      <button\n        ion-button\n        block\n        color=\'primary\'\n        (click)=\'addNumber()\'>\n        Add a new Number question\n      </button>\n    </div>\n\n  </div>\n\n  <ion-searchbar [(ngModel)] = "searchbar" (ionInput)="searchQuestions($event)"></ion-searchbar>\n  <div *ngFor=\'let location of locations\'>\n    <div *ngIf = "email == location.owner">\n      <ion-list>\n        <ion-item>\n          <h2>{{ location.name }}</h2>\n          <p>\n            Type: {{ location.type}}<br>\n            Question Text: {{ location.qtext }}<br>\n            <ng-container *ngIf="location.leftLabel">\n            Left Label: {{ location.leftLabel }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.rightLabel">\n            Right Label: {{ location.rightLabel }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option1">\n            Answer Choice 1: {{ location.option1 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option2">\n            Answer Choice 2: {{ location.option2 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option3">\n            Answer Choice 3: {{ location.option3 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option4">\n            Answer Choice 4: {{ location.option4 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option5">\n            Answer Choice 5: {{ location.option5 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option6">\n            Answer Choice 6: {{ location.option6 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option7">\n            Answer Choice 7: {{ location.option7 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option8">\n            Answer Choice 8: {{ location.option8 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option9">\n            Answer Choice 9: {{ location.option9 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option10">\n            Answer Choice 10: {{ location.option10 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option11">\n            Answer Choice 11: {{ location.option11 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option12">\n            Answer Choice 12: {{ location.option12 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option13">\n            Answer Choice 13: {{ location.option13 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option14">\n            Answer Choice 14: {{ location.option14 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option15">\n            Answer Choice 15: {{ location.option15 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option16">\n            Answer Choice 16: {{ location.option16 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option17">\n            Answer Choice 17: {{ location.option17 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option18">\n            Answer Choice 18: {{ location.option18 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option19">\n            Answer Choice 19: {{ location.option19 }}<br>\n            </ng-container>\n            <ng-container *ngIf="location.option20">\n            Answer Choice 20: {{ location.option20 }}\n            </ng-container>\n          </p>\n\n          <ng-container *ngIf="location.type == \'text\'">\n            <button\n              ion-button\n              color=\'secondary\'\n              (click)=\'updateDocument(location)\'>\n              Update this question\n            </button>\n         </ng-container>\n\n          <ng-container *ngIf="location.type == \'radio\'">\n            <button\n              ion-button\n              color=\'secondary\'\n              (click)=\'updateRadio(location)\'>\n              Update this question\n            </button>\n         </ng-container>\n\n         <ng-container *ngIf="location.type == \'multi\'">\n           <button\n             ion-button\n             color=\'secondary\'\n             (click)=\'updateMulti(location)\'>\n             Update this question\n           </button>\n        </ng-container>\n\n        <ng-container *ngIf="location.type == \'slider\'">\n          <button\n            ion-button\n            color=\'secondary\'\n            (click)=\'updateSlider(location)\'>\n            Update this question\n          </button>\n       </ng-container>\n\n       <ng-container *ngIf="location.type == \'time\'">\n         <button\n           ion-button\n           color=\'secondary\'\n           (click)=\'updateTime(location)\'>\n           Update this question\n         </button>\n      </ng-container>\n\n      <ng-container *ngIf="location.type == \'date\'">\n        <button\n          ion-button\n          color=\'secondary\'\n          (click)=\'updateDate(location)\'>\n          Update this question\n        </button>\n     </ng-container>\n\n     <ng-container *ngIf="location.type == \'number\'">\n       <button\n         ion-button\n         color=\'secondary\'\n         (click)=\'updateDate(location)\'>\n         Update this question\n       </button>\n    </ng-container>\n\n          <button\n            ion-button\n            color=\'danger\'\n            (click)="deleteDocument(location)">\n            Delete this question\n          </button>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/questions/questions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipantsPage = (function () {
    function ParticipantsPage(navCtrl, _DB, _US, _ALERT) {
        this.navCtrl = navCtrl;
        this._DB = _DB;
        this._US = _US;
        this._ALERT = _ALERT;
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description      Defines the name of the database collection
         */
        this._COLL = "Participants";
        this._SD = "Studies";
        /**
         * @name _DOC
         * @type {string}
         * @private
         * @description      Defines the initial document ID for the database collection
         */
        this._DOC = "Xy76Re34Sd";
        this.flag = false;
        this.firstFlag = false;
        this.secondFlag = false;
        this._CONTENT = {
            email: "",
            name: "",
            owner: "",
            phone: "",
            study: "",
            sleep_start: "",
            sleep_end: ""
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
    ParticipantsPage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
        this.retrieveStudies();
        this.email = this._US.returnUser();
        this.searchbar = '';
    };
    /**
     * Creates the collection and populates that with an initial document
     * using the createAndPopulateDocument method of the DatabaseProvider
     * service
     *
     * @public
     * @method generateCollectionAndDocument
     * @return {none}
     */
    ParticipantsPage.prototype.generateCollectionAndDocument = function () {
        this._DB.createAndPopulateDocument(this._COLL, this._DOC, this._CONTENT)
            .then(function (data) {
            console.dir(data);
        })
            .catch(function (error) {
            console.dir(error);
        });
    };
    /**
     * Retrieve all documents from the specified collection using the
     * getDocuments method of the DatabaseProvider service
     *
     * @public
     * @method retrieveCollection
     * @return {none}
     */
    ParticipantsPage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getParticipants(this._COLL)
            .then(function (data) {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
                _this.generateCollectionAndDocument();
            }
            else {
                _this.locations = data;
                _this.local = data;
            }
        })
            .catch();
    };
    ParticipantsPage.prototype.retrieveStudies = function () {
        var _this = this;
        this._DB.getStudies(this._SD)
            .then(function (data) {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
                _this.generateCollectionAndDocument();
            }
            else {
                _this.studs = data;
            }
        })
            .catch();
    };
    /**
     * Navigate to the manage-participant component to begin adding a new document
     *
     * @public
     * @method addParticipant
     * @return {none}
     */
    ParticipantsPage.prototype.addParticipant = function () {
        this.navCtrl.push('create_participant');
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateDocument
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    ParticipantsPage.prototype.updateDocument = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_participant', { record: params, isEdited: true });
    };
    /**
     * Delete a document from the Cloud Firestore collection using the
     * deleteDocument method of the DatabaseProvider service
     *
     * @public
     * @method deleteDocument
     * @param  obj          {Object}           The document ID for the document we wish to delete
     * @return {none}
     */
    ParticipantsPage.prototype.deleteDocument = function (obj) {
        var _this = this;
        this._DB.deleteDocument(this._COLL, obj.id)
            .then(function (data) {
            _this.displayAlert('Success', 'The participant ' + obj.name + ' was successfully removed');
        })
            .catch(function (error) {
            _this.displayAlert('Error', error.message);
        });
    };
    ParticipantsPage.prototype.resetLocations = function () {
        this.locations = this.local;
    };
    ParticipantsPage.prototype.searchParticipants = function (input) {
        this.resetLocations();
        var val = input.target.value;
        if (val && val.trim() != '') {
            this.locations = this.locations.filter(function (participant) {
                return (participant.study.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ParticipantsPage.prototype.exportAnswers_Modules = function () {
        var that = this;
        console.log("zero tier");
        this._DB.exportParticipants(this.email)
            .then(function (data) {
            console.log("first tier");
            that._DB.createParticipantCSV(data)
                .then(function (data) {
                console.log("second tier");
                that._DB.downloadParticipants()
                    .then(function (data) {
                    console.log("third tier");
                    that.link = data;
                    window.location.href = that.link;
                    console.log(that.link);
                });
            });
        });
        this.flag = true;
    };
    ParticipantsPage.prototype.setLink = function () {
        this._DB.downloadParticipants();
        this.firstFlag = true;
    };
    ParticipantsPage.prototype.createLink = function () {
        this.link = this._DB.returnURL();
        console.log(this.link);
        this.secondFlag = true;
    };
    ParticipantsPage.prototype.downloadFile = function () {
        window.location.href = this.link["i"];
    };
    /**
     * Provide feedback to user after an operation has succeeded/failed
     *
     * @public
     * @method displayAlert
     * @param  title          {String}           Heading for alert message
     * @param  message        {String}           Content for alert message
     * @return {none}
     */
    ParticipantsPage.prototype.displayAlert = function (title, message) {
        var _this = this;
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: 'Got It!',
                    handler: function () {
                        _this.retrieveCollection();
                    }
                }]
        });
        alert.present();
    };
    ParticipantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-participants',template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/participants/participants.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Schema\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button\n      ion-button\n      block\n      color=\'primary\'\n      (click)=\'addParticipant()\'>\n      Add a new participant\n    </button>\n\n  <ion-searchbar [(ngModel)] = "searchbar" (ionInput)="searchParticipants($event)"></ion-searchbar>\n  <ion-list>\n    <div *ngFor=\'let location of locations\'>\n      <div *ngIf = "email == location.owner">\n        <ion-item>\n          <h2>Study Name: {{ location.study }}</h2>\n          <p>\n            ID: {{ location.id }} <br>\n            Name: {{ location.name }} <br>\n            Email: {{ location.email}}<br>\n            Phone: {{ location.phone }}<br>\n            Owner: {{ location.owner }}\n          </p>\n\n          <button\n            ion-button\n            color=\'secondary\'\n            (click)=\'updateDocument(location)\'>\n            Update this participant\n          </button>\n\n          <button\n            ion-button\n            color=\'danger\'\n            (click)="deleteDocument(location)">\n            Delete this participant\n          </button>\n        </ion-item>\n      </div>\n    </div>\n\n  </ion-list>\n\n\n  <button ion-button\n          block\n          color=\'primary\'\n          (click)="exportAnswers_Modules()">\n          Export Participants\n  </button>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/participants/participants.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ParticipantsPage);
    return ParticipantsPage;
}());

//# sourceMappingURL=participants.js.map

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = require('child_process');

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(660);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UsersserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsersserviceProvider = (function () {
    function UsersserviceProvider() {
        console.log('Hello UsersserviceProvider Provider');
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]();
        this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Users');
    }
    UsersserviceProvider.prototype.loginUserService = function (email, password) {
        this.email = email;
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    UsersserviceProvider.prototype.signupUserService = function (email, password) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
            //sign in the user
            _this.fireAuth.signInWithEmailAndPassword(email, password).then(function (authenticatedUser) {
                //successful login, create user profile
            });
        });
    };
    UsersserviceProvider.prototype.logoutUserService = function () {
        this.fireAuth.signOut();
    };
    UsersserviceProvider.prototype.sendResetPassword = function (email) {
        this.fireAuth.sendPasswordResetEmail(email).then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
        });
    };
    UsersserviceProvider.prototype.returnUser = function () {
        var email = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.email;
        return email;
    };
    UsersserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UsersserviceProvider);
    return UsersserviceProvider;
}());

//# sourceMappingURL=usersservice.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_studies_studies__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgot_pass_forgot_pass__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_participants_participants__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_admin__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase_admin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase_admin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_usersservice_usersservice__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_database_database__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var iceAccount = __webpack_require__(1216);
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC_Y1zWA0W4LTAr0jE7tYX-bPfbK3B51QI",
    authDomain: "capstone-sugar.firebaseapp.com",
    databaseURL: "https://capstone-sugar.firebaseio.com",
    projectId: "capstone-sugar",
    storageBucket: "capstone-sugar.appspot.com",
    messagingSenderId: "714682249068",
    credential: __WEBPACK_IMPORTED_MODULE_16_firebase_admin__["credential"].cert(iceAccount)
};
__WEBPACK_IMPORTED_MODULE_15_firebase__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_studies_studies__["a" /* StudiesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules__["a" /* ModulesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_participants_participants__["a" /* ParticipantsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/branching/branching.module#BranchingPageModule', name: 'branching', segment: 'branching', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_module/create_module.module#CreateModulePageModule', name: 'create_module', segment: 'create_module', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_participant/create_participant.module#CreateParticipantPageModule', name: 'create_participant', segment: 'create_participant', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_question/create_question.module#CreateQuestionPageModule', name: 'create_question', segment: 'create_question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_questionDate/create_questionDate.module#CreateQuestionDatePageModule', name: 'create_questionDate', segment: 'create_questionDate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_questionMulti/create_questionMulti.module#CreateQuestionMultiPageModule', name: 'create_questionMulti', segment: 'create_questionMulti', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_questionNumber/create_questionNumber.module#CreateQuestionNumberPageModule', name: 'create_questionNumber', segment: 'create_questionNumber', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_questionRadio/create_questionRadio.module#CreateQuestionRadioPageModule', name: 'create_questionRadio', segment: 'create_questionRadio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_questionSlider/create_questionSlider.module#CreateQuestionSliderPageModule', name: 'create_questionSlider', segment: 'create_questionSlider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_questionTime/create_questionTime.module#CreateQuestionTimePageModule', name: 'create_questionTime', segment: 'create_questionTime', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_study/create_study.module#CreateStudyPageModule', name: 'create_study', segment: 'create_study', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot_pass/forgot_pass.module#ForgotPassPageModule', name: 'ForgotPassPage', segment: 'forgot_pass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modules/modules.module#ModulesPageModule', name: 'modules', segment: 'modules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select_module/select_module.module#SelectModulePageModule', name: 'select_module', segment: 'select_module', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select_study/select_study.module#SelectStudyPageModule', name: 'select_study', segment: 'select_study', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_studies_studies__["a" /* StudiesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules__["a" /* ModulesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgot_pass_forgot_pass__["a" /* ForgotPassPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_participants_participants__["a" /* ParticipantsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_studies_studies__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_modules_modules__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_questions_questions__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_participants_participants__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_usersservice_usersservice__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, _US) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this._US = _US;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Studies', component: __WEBPACK_IMPORTED_MODULE_5__pages_studies_studies__["a" /* StudiesPage */] },
            { title: 'Modules', component: __WEBPACK_IMPORTED_MODULE_6__pages_modules_modules__["a" /* ModulesPage */] },
            { title: 'Questions', component: __WEBPACK_IMPORTED_MODULE_8__pages_questions_questions__["a" /* QuestionsPage */] },
            { title: 'Participants', component: __WEBPACK_IMPORTED_MODULE_9__pages_participants_participants__["a" /* ParticipantsPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[638]);
//# sourceMappingURL=main.js.map